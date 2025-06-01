import { PostData, PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
    const [post, setPost] = useState<PostData>({
        userId: 1,
        title: "",
        body: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPost( prevPost => ({ ...prevPost, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(post);
        onClose();
    };

    return (
        <div className="fixed inset0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block mb-2 font-medium text-gray-700">User ID</label>
                        <input
                            type="number"
                            id="userId"
                            name="userId"
                            value={post.userId}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter post title"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block mb-2 font-medium text-gray-700">Title</label>
                        <textarea
                            id="body"
                            name="body"
                            value={post.body}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter post content" />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="focus:outline-none text-gray-600 px-4 py-2 rounded-lg hover:text-gray-800"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostModal;