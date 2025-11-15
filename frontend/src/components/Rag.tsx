import { Card } from 'react-bootstrap';

function Rag() {
    return(
        <div className="chat-container">
            <Card className="chat-card bg-dark text-white mt-5">
                <Card.Header className='chat-header'>
                    <h4>Doc Chat</h4>
                </Card.Header>

                <Card.Body className="p-0">
                </Card.Body>
            </Card>
        </div>
    )
}

export default Rag;