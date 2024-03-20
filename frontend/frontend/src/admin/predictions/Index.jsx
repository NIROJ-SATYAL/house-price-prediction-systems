import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPrediction, getUsers } from 'api/request.api';
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function Index() {
  const [predictions, setPredictions] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const res = await getPrediction();
      console.log(res);
      console.log(res.data);
      setPredictions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchUserData();
  }, []);

  const getUserById = (userId) => {
    const user = users.find((user) => user._id === userId);
    if (user) {
      return user.name;
    } else {
      // remove the user's predictions from the array
      setPredictions((prevState) =>
        prevState.filter((prediction) => prediction.userId !== userId)
      );
      // reset the index to start from 1 again
      return null;
    }
  };

  return (
    <div>
      <table className="table caption-top">
        <caption>
          <div className="d-flex justify-content-between mx-3">
            <h3>Predictions List</h3>
            <h3>Total no of  Predications: ({predictions.length})</h3>
          </div>
        </caption>
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">User</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          { 
            predictions.map((prediction, index) => (
              <tr key={prediction._id}>
                <th scope="row">{index + 1}</th>
                <td>{getUserById(prediction.userId)}</td>
                <td>{prediction.predictedPrice}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Index;
