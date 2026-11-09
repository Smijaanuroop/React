// function StudentName1(props) {
//     return (
//         <>
//         <h3>Welcome Student!</h3>
//         <div>
//             <p>Name:{props.name}</p>
//             <p>Course:{props.course}</p>
//         </div>
//         </>
//     )
// }
// export default StudentName1


import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ORANGE = '#FF8C00';

function StudentName1({ name, course }) {
  return (
    <Card
      className="mx-auto shadow-lg my-3 overflow-hidden border-0"
      style={{ maxWidth: '550px', borderRadius: '20px' }}
    >
      {/* Orange Header - Like your ID Card image */}
      <div
        className="text-center py-3 fw-bold text-white"
        style={{ backgroundColor: ORANGE, fontSize: '22px' }}
      >
        🏫 Futura Labs
      </div>

      <Card.Body>
        <Row>
          <Col xs={7} className="text-start">
            <p className="mb-1 fw-bold">Student : {name}</p>
            <p className="mb-1 fw-bold">Course : {course}</p>
            <p className="mb-1 fw-bold">Phone : 0000 000 00</p>
            <p className="mb-1 fw-bold">Session : YYYY</p>
          </Col>
          <Col xs={5} className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt={name}
              className="img-fluid"
              style={{ width: '100px', height: '110px', objectFit: 'cover' }}
            />
            <h5 className="mt-2 fw-bold" style={{ color: ORANGE }}>
              {name}
            </h5>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={6} className="text-start">
            <small>Authorize Signature</small>
          </Col>
          <Col xs={6} className="text-end">
            <div className="bg-dark text-white px-2 py-1 text-center">
              |||| || |||| ||||<br />
              <small>1234567890</small>
            </div>
          </Col>
        </Row>

        <Button
          className="mt-3 w-100 fw-bold border-0"
          style={{ backgroundColor: ORANGE }}
        >
          View Profile
        </Button>
      </Card.Body>
    </Card>
  );
}

export default StudentName1;