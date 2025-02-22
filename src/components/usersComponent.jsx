import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "../redux/store";

export const UsersComponent = () => {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [editId, setEditId] = useState(null);

    const handleSubmit = () => {
        if (editId) {
            dispatch(updateUser({ id: editId, name }));
            setEditId(null);
        } else {
            dispatch(addUser({ id: Date.now(), name }));
        }
        setName("");
    };

    return (
        <div className="container mt-4">
            <div className="fixed-container card shadow border-none bg-info mx-auto">
                <h2 className="bg-info text-white rounded-3 p-3">Users List</h2>
                <input
                    type="text"
                    value={name}
                    className="form-control mb-2"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter user name"
                />
                <button
                    className={`btn mt-3 ${editId ? "btn-primary" : "btn-primary"} px-4 mx-auto`}
                    onClick={handleSubmit}
                >
                    {editId ? "Update" : "Add"}
                </button>
            </div>

            {/* Responsive Flexbox Layout */}
            <div className="users-container d-flex flex-wrap justify-content-center mt-3">
                {users.map(user => (
                    <div key={user.id} className="user-card shadow">
                        <h5>{user.name}</h5>
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn btn-outline-primary mx-2"
                                onClick={() => {
                                    setName(user.name);
                                    setEditId(user.id);
                                }}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => dispatch(deleteUser(user.id))}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
                {users.length == 0 && (<div className="text-center">No data found</div>)}
            </div>
        </div>
    );
};