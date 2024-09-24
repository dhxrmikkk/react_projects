import { ClockIcon } from '@heroicons/react/24/outline'
import { Avatar } from '@material-tailwind/react'
import React, { useState } from 'react'

const Notification = () => {

    const notification = [
        {
            id: 1,
            name: "Natali",
            profileimg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
            message: "replied to your email",
            time: 1,
            timeformat: "day",
            notification: "hey dharmik ! we have recieved the invoice will payment you soon",
        },
        {
            id: 2,
            name: "John",
            profileimg: "https://docs.material-tailwind.com/img/face-2.jpg",
            message: "sent a message",
            time: 13,
            timeformat: "minutes",
            notification: "hey dharmik ! can you please provide us the quations of 100 products for tshirt",
        },
        {
            id: 3,
            name: "Alyx",
            profileimg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
            message: "sent a message",
            time: 1,
            timeformat: "minutes",
            notification: "hey dharmik ! Your Recently sent invoice has some issues regarding tax can you please connect with your accountant",
        },
        {
            id: 4,
            name: "Natali",
            profileimg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
            message: "replied to your email",
            time: 1,
            timeformat: "day",
            notification: "hey dharmik ! we have recieved the invoice will payment you soon",
        },
        {
            id: 5,
            name: "John",
            profileimg: "https://docs.material-tailwind.com/img/face-2.jpg",
            message: "sent a message",
            time: 13,
            timeformat: "minutes",
            notification: "hey dharmik ! can you please provide us the quations of 100 products for tshirt",
        },


    ];

    const [selectedNotification, setSelectedNotification] = useState(notification[notification.length - 1]);


    const setField = (id) => {
        const item = notification.find((arrayItem) => arrayItem.id === id);
        setSelectedNotification(item);
    }

    return (
        <div className='flex flex-col xl:flex-row w-full xl:space-x-2'>
            <div className="xl:w-1/2 mb-4 xl:mb-0">
                <div>
                    <div className="p-4 bg-white border border-[#ededed] rounded-lg xl:h-[30rem] xl:min-h-[30rem] xl:max-h-[30rem] overflow-y-auto table-scrollbar">
                        {notification.slice().reverse().map((items) => (
                            <div key={items.id} className='flex items-center space-x-4 cursor-pointer hover:bg-[#f0f2f4] p-3 rounded-lg' onClick={() => setField(items.id)}>
                                <div>
                                    <Avatar
                                        variant="circular"
                                        alt={items.name}
                                        src={items.profileimg}
                                        className='min-w-14 min-h-14'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-geist sm:w-[230px] sm:max-w-[230px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                        {items.name} {items.message}
                                    </span>
                                    <div className='flex space-x-2 items-center'>
                                        <ClockIcon className='w-3 h-3 align-top text-[#979797]' />
                                        <span className='font-geist text-[#979797]'>{items.time} {items.timeformat} ago</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="xl:w-2/3">
                {selectedNotification && (
                    <div className="p-4 bg-white border border-[#ededed] rounded-lg flex flex-col h-[30rem] min-h-[30rem]">

                        <div className='flex items-center mb-4'>
                            <div>
                                <Avatar variant="circular"
                                    alt={selectedNotification.name}
                                    src={selectedNotification.profileimg}
                                    className='min-w-14 min-h-14 me-4' />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-xl'>{selectedNotification.name} {selectedNotification.message}</span>
                                <span className='font-geist text-[#979797] text-sm'>{selectedNotification.time} {selectedNotification.timeformat} ago</span>
                            </div>
                        </div>
                        <div>
                            <code className='text-[#000000CC]'>{selectedNotification.notification}</code>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Notification;
