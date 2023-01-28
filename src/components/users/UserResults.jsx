import { useEffect } from "react";

function UserResults() {
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_GITHUB_URL}/users`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>User Results</h1>
    </div>
  );
}

export default UserResults;
