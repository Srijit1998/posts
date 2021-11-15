import React, { useEffect, useState } from 'react';
import { Tabs, TabList, List } from '@chakra-ui/react';
import axios from 'axios'; 
import TabName from './TabName';
import Posts from './Posts';

const Home = () => {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(data);
        }
        getUsers();
    }, []);

    useEffect(() => {
        const getUserPosts = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    userId: 1
                }
            });
            setPosts(data);
        }
        getUserPosts();
    }, []);

    const fetchUserPosts = async (id) => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                userId: id
            }
        });
        setPosts(data);
    }

    return (
        <>
            <Tabs variant="soft-rounded" colorScheme="green">
                <TabList>
                    {users.map(user => {
                        return <TabName 
                                    key={user.id}  
                                    id={user.id} 
                                    username={user.name} 
                                    fetchUserPosts={fetchUserPosts}
                                />
                    })}
                </TabList>
            </Tabs>
            <List spacing={3} mt={5}>
                {posts.map(post => {
                    return (
                        <Posts 
                            title={post.title}
                            desc={post.body}
                        />
                    );
                })}
            </List>  
        </>
    )
}

export default Home;
