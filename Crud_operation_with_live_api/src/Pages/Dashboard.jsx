import React, { useEffect, useState } from 'react';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';
import Modal from '../Components/Modal';
import Loader from '../Components/Loader';

const Dashboard = () => {
    const baseUrl = import.meta.env.VITE_APP_API_URL;

    // Modal and post state
    const [open, setOpen] = useState(false);
    const [modalType, setModalType] = useState('add');
    const [createPostTitle, setCreatePostTitle] = useState('');
    const [createPostContent, setCreatePostContent] = useState('');
    const [selectedPostId, setSelectedPostId] = useState(null);

    // All posts and loaders
    const [allPostList, setAllPostList] = useState([]);
    const [loading, setLoading] = useState(true);  // Loading for page load
    const [operationLoading, setOperationLoading] = useState(false); // Loading for Add, Edit, Delete operations

    // Fetch all posts
    const getAllPost = async () => {
        setLoading(true);
        try {
            const fetchUrl = await fetch(baseUrl);
            const response = await fetchUrl.json();
            setAllPostList(response);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    // Toggle modal and set type
    const handleOpen = (type = 'add', post = null) => {
        setModalType(type);
        if (post) {
            setSelectedPostId(post._id);
            setCreatePostTitle(post.title);
            setCreatePostContent(post.body);
        } else {
            setCreatePostTitle('');
            setCreatePostContent('');
            setSelectedPostId(null);
        }
        setOpen(!open);
    };

    // Create a new post
    const createPost = async () => {
        setOperationLoading(true);
        if (createPostTitle === "" || createPostContent === "") {
            toast.error(`Fields Can't be Empty !`);
            setOperationLoading(false)
        }
        else {
            try {
                const fetchUrl = await fetch(baseUrl, {
                    method: 'POST',
                    body: JSON.stringify({
                        title: createPostTitle,
                        body: createPostContent,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
                const newPost = await fetchUrl.json();
                setAllPostList([...allPostList, newPost]);
                toast.success('Post Added !');
                setOpen(false);
            } catch (error) {
                console.log(error);
            } finally {
                setOperationLoading(false);
            }
        }

    };

    // Delete a post
    const deletePost = async () => {
        setOperationLoading(true);
        try {
            const fetchUrl = await fetch(`${baseUrl}/${selectedPostId}`, {
                method: 'DELETE',
            });
            if (fetchUrl.ok) {
                toast.success(`Post Deleted !`);
                getAllPost();
                setOpen(false);
            } else {
                console.error(`Failed to delete post with id ${selectedPostId}. Status: ${fetchUrl.status}`);
            }
        } catch (error) {
            console.error('Error deleting the post:', error);
        } finally {
            setOperationLoading(false);
        }
    };

    // Edit a post
    const editPost = async () => {
        setOperationLoading(true);
        try {
            const fetchUrl = await fetch(`${baseUrl}/${selectedPostId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: createPostTitle,
                    body: createPostContent,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const updatedPost = await fetchUrl.json();
            const updatedList = allPostList.map((post) =>
                post._id === updatedPost._id ? updatedPost : post
            );
            setAllPostList(updatedList);
            toast.success('Post Updated !');
            setOpen(false);
        } catch (error) {
            console.log(error);
        } finally {
            setOperationLoading(false);
        }
    };

    useEffect(() => {
        getAllPost();
    }, []);

    return (
        <>
            <main className="h-screen font-poppins">
                <div className="py-4 px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-64">
                    {/* Heading */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl">Post Data</h2>
                        <button
                            className="py-2 px-3 bg-[#383336] text-white rounded-md font-semibold"
                            onClick={() => handleOpen('add')}
                        >
                            + Add Post
                        </button>
                    </div>

                    {/* Loader for initial page load */}
                    {loading ? (
                        <Loader
                            visible={true}
                            height="35"
                            width="35"
                            color="#383336"  // Primary color
                            secondaryColor="#ffffff"  // Secondary color (e.g., white or any other color)
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            className={`h-[10vh] flex justify-center items-center`}
                        />  // Display loader when loading
                    ) : (
                        <>
                            {/* Modal */}
                            <Modal
                                open={open}
                                handleOpen={() => handleOpen(modalType)}
                                title={createPostTitle}
                                content={createPostContent}
                                setTitle={setCreatePostTitle}
                                className="font-poppins"
                                setContent={setCreatePostContent}
                                handleSubmit={
                                    modalType === 'delete' ? deletePost :
                                        modalType === 'edit' ? editPost : createPost
                                }
                                modalType={modalType}
                                headerText={
                                    modalType === 'delete' ? 'Delete Post' :
                                        modalType === 'edit' ? 'Update Post' : 'Add Post'
                                }
                                submitButtonText={
                                    modalType === 'delete' ? ' Delete' :
                                        modalType === 'edit' ? 'Update ' : 'Add Post'
                                }
                                operationLoading={operationLoading}  // Pass the loading state to the Modal
                            />


                            {/* Table */}
                            <div className="my-8 overflow-x-auto">
                                <table className="w-full min-w-max table-auto text-left">
                                    <thead>
                                        <tr className="bg-[#ececec] rounded-md">
                                            <td className="p-3 font-semibold">TITLE</td>
                                            <td className="p-3 font-semibold">CONTENT</td>
                                            <td className="p-3 font-semibold text-center">ACTION</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            allPostList.length > 0
                                                ?
                                                (allPostList.map((item) => (
                                                    <tr key={item._id} className="align-top border-b-2">
                                                        <td className="p-2">{item.title}</td>
                                                        <td className="p-2 max-w-xs overflow-hidden whitespace-nowrap text-ellipsis">
                                                            {item.body}
                                                        </td>
                                                        <td className="p-2 flex justify-center space-x-3 items-center">
                                                            <PencilSquareIcon
                                                                className="size-5 text-green-400 cursor-pointer"
                                                                onClick={() => handleOpen('edit', item)}
                                                            />
                                                            <TrashIcon
                                                                className="size-5 text-red-400 cursor-pointer"
                                                                onClick={() => handleOpen('delete', item)}
                                                            />
                                                        </td>
                                                    </tr>
                                                )))
                                                :
                                                (
                                                    <tr className="align-top">
                                                        <td className="p-4 font-semibold text-center" colSpan={3}>No Records Found !</td>
                                                    </tr>
                                                )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </>
    );
};

export default Dashboard;
