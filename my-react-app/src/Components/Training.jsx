// function Training() {
//     const students = ["AAA","BBB","CCC"];
//     return(
//         <>
//         <h2>Student List</h2>
//         {/* const products = [
//     { id: 1, name: "Laptop", price: 800 },
//     { id: 2, name: "Phone", price: 500 },
//     { id: 3, name: "Tablet", price: 300 }
//   ]; */}
//         <ul>
//             {students.map((students,index)=>(<li key={index}>{students}</li>))}
            
//         </ul>
//         </>
//     )
// }
// export default Training


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Training.css'; // <-- CSS Import - Important!

function Training() {
  const students = ["AAA", "BBB", "CCC"];

  return (
    <div className="training-page">
      <Container className="text-center">
        <h2 className="training-title">Student List</h2>

        <Row>
          {students.map((student, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-3">
              <Card className="student-card">
                <h5 className="student-name">{student}</h5>
                <p className="student-course">Course : CSE</p>
                <p className="student-session">Session : YYYY</p>

                <div className="signature-row">
                  <span>Authorize Signature</span>
                  <span className="barcode">|||| || ||||</span>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Training;