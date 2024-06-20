// api.js
export async function updateBranch(branchId, branchDetails) {
  const response = await fetch(`http://localhost:8080/api/branches/${branchId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(branchDetails),
  });
  if (!response.ok) {
    throw new Error('Failed to update branch');
  }
  return response.json();
}


export const deleteBranch = async (id) => {
  const response = await fetch(`http://localhost:8080/api/branches/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete branch');
  }
};
