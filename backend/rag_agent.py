from langchain_community.document_loaders import PyPDFLoader
import pandas as pd
import re
import numpy as np
from langchain.tools import tool
from langchain.agents import create_agent
import os
from dotenv import load_dotenv
import json
from pydantic import BaseModel, Field
from typing import List

load_dotenv()
os.environ["OPENAI_API_KEY"] = os.getenv('OPENAI_API_KEY')

# ---------- PARSER TOOLS ----------
@tool
def parse_pdf(file_path: str) -> str:
    """Load PDF and return raw text."""
    loader = PyPDFLoader(file_path)
    docs = loader.load()
    full_text = "\n".join([doc.page_content for doc in docs])
    return full_text

@tool
def parse_excel(files_path: str) -> pd.DataFrame:
    """Load Excel and return df."""
    df = pd.read_csv(files_path, header=None)

    return df


# ---------- AGENT ----------
def rag_agent(file_path: str):

    class Source(BaseModel):
        source_text: str = Field(description="The exact text or snippet from the document used to generate the answer.")
        page_number: int = Field(description="The page number in the document where this source appears.")        

    class RagSchema(BaseModel):
        """Schema representing the agent's response and supporting document sources."""
        
        response: str = Field(
            description="The agent's answer to the user's question."
        )
        sources: List[Source] = Field(
            description="A list of document sources, each containing the text snippet and its page number."
        )


    agent = create_agent(
        model="openai:gpt-5-nano",
        tools=[parse_excel, parse_pdf],
        system_prompt = (
            "You are an intelligent retrieval-augmented financial assistant. The user may provide either a PDF or Excel document "
            "containing relevant financial or transactional information. Use the appropriate tool — `parse_pdf` or `parse_excel` — "
            "to extract the necessary details from the provided file. "
            "After extracting the information, carefully analyze the content to answer the user's question as accurately and concisely as possible. "
            "Base your response strictly on the extracted data and avoid assumptions or unsupported information. "
            "Include the exact document sources (file names, sections, or relevant snippets) that support your response. "
        ),
        response_format=RagSchema 
    )

    result = agent.invoke({
        "messages": [{"role": "user", "content": file_path}]
    })

    return result["structured_response"]

if __name__ == "__main__":
    print("running directly")
    result = rag_agent("statements\Mock_Bank_Statement.pdf")
    with open("rag_output.txt", "w", encoding="utf-8") as f:
        json.dump(result, f, indent=4)
