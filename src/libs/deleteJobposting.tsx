import { getSession } from "next-auth/react";

export async function deleteJobposting(jpid: string) {
    try {
        const session = await getSession();
        const token = session?.user.token;

        if (!token) {
            throw new Error("Unauthorized: No token found. Please log in.");
        }

        const response = await fetch(`http://localhost:5005/api/v1/jobpostings/${jpid}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            // if (response.status === 401) {
            //     throw new Error("Unauthorized: You don't have permission to delete this jobposting.");
            // } else if (response.status === 403) {
            //     throw new Error("Forbidden: Your role is not authorized to delete jobposting.");
            // }
            // const errorData = await response.json();
            throw new Error(`Failed to delete jobposting (status: ${response.status})`);
        }

        return await response.json();
    } catch (error: any) {
        console.error("Error deleting jobposting:", error);
        throw error;
    }
}