import React from 'react'

// import { useState, useEffect } from 'react';
import { useUserAuth, useLogout } from '../../context/AuthContext';
import { href, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';


// const Navigation = () => {

//     // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
//     const user = useUserAuth();
//     const logOutUser = useLogout();

//     const navigate = useNavigate();

//     const navigateTo = (path) => {
//         navigate(path);
//     }

//   const logOut = async () => {
//     await logOutUser();
//   }

// //   console.log(isUserLoggedIn)


//   return (
//     <nav
//         className='w-full py-2 sticky top-0 flex justify-between items-center z-10 bg-white border-b-2 border-gray-600'
//     >
//         <div>
//             <h5>
//                 <button
//                     // href='/'
//                     onClick={()=>{
//                         navigateTo('/')
//                     }}
//                     className='flex justify-start items-center'
//                 >
//                     <Icon icon="healthicons:register-book" className='w-full h-full text-5xl'/>
//                     <span
//                         className='text-2xl ms-1'
//                     >
//                         Keepers
//                     </span>
//                 </button>
//             </h5>
//         </div>
//         <div>
//             <h5>
//                 <button
//                     // href='/add-book'
//                     onClick={()=>{
//                         navigateTo('/add-book')
//                     }}
//                 >
//                     Add Book
//                 </button>
//             </h5>
//         </div>
//         <div
//             className='flex justify-center items-center gap-x-5'
//         >
//             {
//                 user.isLoggedIn ? (
//                     <button
//                         className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
//                         onClick={logOut}
//                     >
//                         Logout
//                     </button>
//                 )
//                 :
//                 (
//                     <>
//                         <button
//                             className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
//                             // href='/login'
//                             onClick={()=>{
//                                 navigateTo('/login')
//                             }}
//                         >
//                             Login
//                         </button>
//                         <button
//                             className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
//                             // href='/register'
//                             onClick={()=>{
//                                 navigateTo('/register')
//                             }}
//                         >
//                             Signup
//                         </button>
//                     </>
//                 )
//             }
//         </div>
//     </nav>
//   )
// }

// export default Navigation



// import * as React from "react";
import { NavigationMenu, Dialog } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import SignInForm from './SignInForm';

const Navigation = () => {
    const user = useUserAuth();
    const logOutUser = useLogout();

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

  const logOut = async () => {
    await logOutUser();
  }
	return (
		<NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
			<NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white p-1 shadow-[0_2px_10px] shadow-blackA4">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
						Web{" "}
						<CaretDownIcon
							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto shadow-inner border overflow-hidden rounded-md">
						<ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
							<li className="row-span-3 grid">
								<NavigationMenu.Link asChild>
									<button
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7 shadow-inner hover:shadow-2xl transition-shadow duration-1000"
										onClick={()=>{navigateTo("/")}}
									>
										<Icon icon="healthicons:register-book" className='w-full h-full text-5xl'/>
                                        <span
                                        className='text-2xl ms-1'
                                        >
                                            Keepers
                                        </span>
									</button>
								</NavigationMenu.Link>
							</li>

							<ListItem onClick={()=>{navigateTo("/")}} title="Home">
								See what's new in our store
							</ListItem>
							<ListItem onClick={()=>{navigateTo("/add-book")}} title="Add book">
								Are we missing something? Add on our website
							</ListItem>
							<ListItem onClick={()=>{navigateTo("/")}} title="Invite">
								Love our website? You can invite your friends to our website.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
						User{" "}
						<CaretDownIcon
							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto sm:h-auto shadow-inner border overflow-hidden rounded-md">
						<ul className={`m-0 list-none gap-x-2.5 p-[22px] sm:w-[600px] ${!(user.isLoggedIn) && "grid sm:grid-flow-col"}`}>
							{
                                user.isLoggedIn ? (
                                    <ListItem
								    title={<div
                                        className='flex justify-start items-center gap-4'
                                        onClick={logOut}
                                    >
                                        <Icon icon="majesticons:login" className='text-3xl text-center w-auto mx-auto' />
                                        Login to your account
                                    </div>}
								    onClick={()=>{navigateTo("/")}}
							    >
							    </ListItem>
                                )
                                :
                                (
                                    <>
                                    <li>
                                        <Dialog.Root>
		                                    <Dialog.Trigger asChild>
                                                <button
                                                    className="w-full flex justify-start items-center select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                                                >
                                                    <span className='mb-[5px] font-medium leading-[1.2] text-violet12'>

                                                        <Icon icon="mynaui:heart-user" className='w-full h-full text-3xl' />
                                                    </span>
                                                    <span className='ms-2'>
                                                        Login to your account
                                                    </span>
                                                </button>
		                                    </Dialog.Trigger>
                                            <Dialog.Portal>
			                                    <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-black bg-opacity-35 backdrop-blur-sm w-screen h-screen z-10" />
			                                        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-2xl border p-[25px] shadow-[var(--shadow-6)] focus:outline-none z-10 data-[state=open]:animate-contentShow">
				                                        <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
				                                	        <h5 className='flex flex-col justify-center items-center gap-2 w-full' >
                                                                <span>
                                                                    <Icon icon="healthicons:register-book" className='w-full h-full text-5xl' />
                                                                </span>

                                                                <span>
                                                                    Login to your account
                                                                </span>
                                                            </h5>
				                                        </Dialog.Title>
				                                        <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
				                                	        <SignInForm />
				                                        </Dialog.Description>
                                                    </Dialog.Content>
                                                </Dialog.Portal>
                                            </Dialog.Root>

                                        
                                    </li>
                                    

                                    <li>
                                        <Dialog.Root>
		                                    <Dialog.Trigger asChild>
                                                <button
                                                    className="w-full flex justify-start items-center select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                                                >
                                                    <span className='mb-[5px] font-medium leading-[1.2] text-violet12'>

                                                        <Icon icon="hugeicons:ai-user" className='w-full h-full text-3xl' />
                                                    </span>
                                                    <span className='ms-2'>
                                                        Sign up to a new account
                                                    </span>
                                                </button>
		                                    </Dialog.Trigger>
                                            <Dialog.Portal>
			                                    <Dialog.Overlay className="fixed z-10 inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-black bg-opacity-35 backdrop-blur-sm w-screen h-screen" />
			                                        <Dialog.Content className="fixed z-10 left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-2xl border p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
				                                        <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
				                                	        <h5 className='flex flex-col justify-center items-center gap-2 w-full' >
                                                                <span>
                                                                    <Icon icon="healthicons:register-book" className='w-full h-full text-5xl' />
                                                                </span>

                                                                <span>
                                                                    Sign up to a new account
                                                                </span>
                                                            </h5>
				                                        </Dialog.Title>
				                                        <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
				                                	        <SignInForm />
				                                        </Dialog.Description>
                                                    </Dialog.Content>
                                                </Dialog.Portal>
                                            </Dialog.Root>

                                        
                                    </li>
                                    
                                    
                                    {/* <ListItem
								title={<div
                                    className='flex justify-start items-center gap-4'
                                >
                                    <Icon icon="majesticons:login" className='text-3xl text-center w-auto mx-auto' />
                                    Login to your account
                                </div>}
								onClick={()=>{navigateTo("/")}}
							>
							</ListItem> */}
                            {/* <ListItem
								title={<div className='flex justify-start items-center'>
                                    <Icon icon="typcn:user-add-outline" className='text-3xl text-center w-auto mx-auto' />
                                    Create a new account
                                </div>}
								onClick={()=>{navigateTo("/")}}
							>
							</ListItem> */}
                                    </>
                                )
                            }
							
							{/* <ListItem title="Styling" href="/primitives/docs/guides/styling">
								Unstyled and compatible with any styling solution.
							</ListItem> */}
							{/* <ListItem
								title="Animation"
								onClick={()=>{navigateTo("/")}}
							>
								Use CSS keyframes or any animation library of your choice.
							</ListItem> */}
							
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				

				<NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
					<div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
				<NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
			</div>


		</NavigationMenu.Root>
	);
};

const ListItem = React.forwardRef(
	({ className, children, title, ...props }, forwardedRef) => {
        // const navigate = useNavigate();

        // function clicked()
        // {
        //     navigate(href)
        // }
        return (
            (
		<li>
			<NavigationMenu.Link asChild>
				<button
					className={classNames(
						"block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
						className,
					)}
					{...props}
					ref={forwardedRef}
				>
					<div className="mb-[5px] font-medium leading-[1.2] text-violet12">
						{title}
					</div>
					<p className="leading-[1.4] text-mauve11">{children}</p>
				</button>
			</NavigationMenu.Link>
		</li>
	)
        )
    },
);

export default Navigation;
