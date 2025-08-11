// import React from 'react'

// // import { useState, useEffect } from 'react';
import { useUserAuth, useLogout } from '../../context/AuthContext';
// import { href, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';


// // const Navigation = () => {

// //     // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
// //     const user = useUserAuth();
// //     const logOutUser = useLogout();

// //     const navigate = useNavigate();

// //     const navigateTo = (path) => {
// //         navigate(path);
// //     }

// //   const logOut = async () => {
// //     await logOutUser();
// //   }

// // //   console.log(isUserLoggedIn)


// //   return (
// //     <nav
// //         className='w-full py-2 sticky top-0 flex justify-between items-center z-10 bg-white border-b-2 border-gray-600'
// //     >
// //         <div>
// //             <h5>
// //                 <button
// //                     // href='/'
// //                     onClick={()=>{
// //                         navigateTo('/')
// //                     }}
// //                     className='flex justify-start items-center'
// //                 >
// //                     <Icon icon="healthicons:register-book" className='w-full h-full text-5xl'/>
// //                     <span
// //                         className='text-2xl ms-1'
// //                     >
// //                         Keepers
// //                     </span>
// //                 </button>
// //             </h5>
// //         </div>
// //         <div>
// //             <h5>
// //                 <button
// //                     // href='/add-book'
// //                     onClick={()=>{
// //                         navigateTo('/add-book')
// //                     }}
// //                 >
// //                     Add Book
// //                 </button>
// //             </h5>
// //         </div>
// //         <div
// //             className='flex justify-center items-center gap-x-5'
// //         >
// //             {
// //                 user.isLoggedIn ? (
// //                     <button
// //                         className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
// //                         onClick={logOut}
// //                     >
// //                         Logout
// //                     </button>
// //                 )
// //                 :
// //                 (
// //                     <>
// //                         <button
// //                             className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
// //                             // href='/login'
// //                             onClick={()=>{
// //                                 navigateTo('/login')
// //                             }}
// //                         >
// //                             Login
// //                         </button>
// //                         <button
// //                             className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
// //                             // href='/register'
// //                             onClick={()=>{
// //                                 navigateTo('/register')
// //                             }}
// //                         >
// //                             Signup
// //                         </button>
// //                     </>
// //                 )
// //             }
// //         </div>
// //     </nav>
// //   )
// // }

// // export default Navigation



// // import * as React from "react";
// import { NavigationMenu, Dialog } from "radix-ui";
// import classNames from "classnames";
// import { CaretDownIcon } from "@radix-ui/react-icons";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

// const Navigation = () => {
//     const user = useUserAuth();
//     const logOutUser = useLogout();

//     const navigate = useNavigate();

//     const navigateTo = (path) => {
//         navigate(path);
//     }

//   const logOut = async () => {
//     await logOutUser();
//   }
// 	return (
// 		<NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
// 			<NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white p-1 shadow-[0_2px_10px] shadow-blackA4">
// 				<NavigationMenu.Item>
// 					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
// 						Web{" "}
// 						<CaretDownIcon
// 							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
// 							aria-hidden
// 						/>
// 					</NavigationMenu.Trigger>
// 					<NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto shadow-inner border overflow-hidden rounded-md">
// 						<ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
// 							<li className="row-span-3 grid">
// 								<NavigationMenu.Link asChild>
// 									<button
// 										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7 shadow-inner hover:shadow-2xl transition-shadow duration-1000"
// 										onClick={()=>{navigateTo("/")}}
// 									>
// 										<Icon icon="healthicons:register-book" className='w-full h-full text-5xl'/>
//                                         <span
//                                         className='text-2xl ms-1'
//                                         >
//                                             Keepers
//                                         </span>
// 									</button>
// 								</NavigationMenu.Link>
// 							</li>

// 							<ListItem onClick={()=>{navigateTo("/")}} title="Home">
// 								See what's new in our store
// 							</ListItem>
// 							<ListItem onClick={()=>{navigateTo("/add-book")}} title="Add book">
// 								Are we missing something? Add on our website
// 							</ListItem>
// 							<ListItem onClick={()=>{navigateTo("/")}} title="Invite">
// 								Love our website? You can invite your friends to our website.
// 							</ListItem>
// 						</ul>
// 					</NavigationMenu.Content>
// 				</NavigationMenu.Item>

// 				<NavigationMenu.Item>
// 					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
// 						User{" "}
// 						<CaretDownIcon
// 							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
// 							aria-hidden
// 						/>
// 					</NavigationMenu.Trigger>
// 					<NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto sm:h-auto shadow-inner border overflow-hidden rounded-md">
// 						<ul className={`m-0 list-none gap-x-2.5 p-[22px] sm:w-[600px] ${!(user.isLoggedIn) && "grid sm:grid-flow-col"}`}>
// 							{
//                                 user.isLoggedIn ? (
//                                     <ListItem
// 								    title={<div
//                                         className='flex justify-start items-center gap-4'
//                                         onClick={logOut}
//                                     >
//                                         <Icon icon="majesticons:login" className='text-3xl text-center w-auto mx-auto' />
//                                         Login to your account
//                                     </div>}
// 								    onClick={()=>{navigateTo("/")}}
// 							    >
// 							    </ListItem>
//                                 )
//                                 :
//                                 (
//                                     <>
//                                     <li>
//                                         <Dialog.Root>
// 		                                    <Dialog.Trigger asChild>
//                                                 <button
//                                                     className="w-full flex justify-start items-center select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
//                                                 >
//                                                     <span className='mb-[5px] font-medium leading-[1.2] text-violet12'>

//                                                         <Icon icon="mynaui:heart-user" className='w-full h-full text-3xl' />
//                                                     </span>
//                                                     <span className='ms-2'>
//                                                         Login to your account
//                                                     </span>
//                                                 </button>
// 		                                    </Dialog.Trigger>
//                                             <Dialog.Portal>
// 			                                    <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-black bg-opacity-35 backdrop-blur-sm w-screen h-screen z-10" />
// 			                                        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-2xl border p-[25px] shadow-[var(--shadow-6)] focus:outline-none z-10 data-[state=open]:animate-contentShow">
// 				                                        <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
// 				                                	        <h5 className='flex flex-col justify-center items-center gap-2 w-full' >
//                                                                 <span>
//                                                                     <Icon icon="healthicons:register-book" className='w-full h-full text-5xl' />
//                                                                 </span>

//                                                                 <span>
//                                                                     Login to your account
//                                                                 </span>
//                                                             </h5>
// 				                                        </Dialog.Title>
// 				                                        <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
// 				                                	        <SignInForm />
// 				                                        </Dialog.Description>
//                                                     </Dialog.Content>
//                                                 </Dialog.Portal>
//                                             </Dialog.Root>

                                        
//                                     </li>
                                    

//                                     <li>
//                                         <Dialog.Root>
// 		                                    <Dialog.Trigger asChild>
//                                                 <button
//                                                     className="w-full flex justify-start items-center select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
//                                                 >
//                                                     <span className='mb-[5px] font-medium leading-[1.2] text-violet12'>

//                                                         <Icon icon="hugeicons:ai-user" className='w-full h-full text-3xl' />
//                                                     </span>
//                                                     <span className='ms-2'>
//                                                         Sign up to a new account
//                                                     </span>
//                                                 </button>
// 		                                    </Dialog.Trigger>
//                                             <Dialog.Portal>
// 			                                    <Dialog.Overlay className="fixed z-10 inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-black bg-opacity-35 backdrop-blur-sm w-screen h-screen" />
// 			                                        <Dialog.Content className="fixed z-10 left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-2xl border p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
// 				                                        <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
// 				                                	        <h5 className='flex flex-col justify-center items-center gap-2 w-full' >
//                                                                 <span>
//                                                                     <Icon icon="healthicons:register-book" className='w-full h-full text-5xl' />
//                                                                 </span>

//                                                                 <span>
//                                                                     Sign up to a new account
//                                                                 </span>
//                                                             </h5>
// 				                                        </Dialog.Title>
// 				                                        <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
// 				                                	        <SignInForm />
// 				                                        </Dialog.Description>
//                                                     </Dialog.Content>
//                                                 </Dialog.Portal>
//                                             </Dialog.Root>

                                        
//                                     </li>
                                    
                                    
//                                     {/* <ListItem
// 								title={<div
//                                     className='flex justify-start items-center gap-4'
//                                 >
//                                     <Icon icon="majesticons:login" className='text-3xl text-center w-auto mx-auto' />
//                                     Login to your account
//                                 </div>}
// 								onClick={()=>{navigateTo("/")}}
// 							>
// 							</ListItem> */}
//                             {/* <ListItem
// 								title={<div className='flex justify-start items-center'>
//                                     <Icon icon="typcn:user-add-outline" className='text-3xl text-center w-auto mx-auto' />
//                                     Create a new account
//                                 </div>}
// 								onClick={()=>{navigateTo("/")}}
// 							>
// 							</ListItem> */}
//                                     </>
//                                 )
//                             }
							
// 							{/* <ListItem title="Styling" href="/primitives/docs/guides/styling">
// 								Unstyled and compatible with any styling solution.
// 							</ListItem> */}
// 							{/* <ListItem
// 								title="Animation"
// 								onClick={()=>{navigateTo("/")}}
// 							>
// 								Use CSS keyframes or any animation library of your choice.
// 							</ListItem> */}
							
// 						</ul>
// 					</NavigationMenu.Content>
// 				</NavigationMenu.Item>

				

// 				<NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
// 					<div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
// 				</NavigationMenu.Indicator>
// 			</NavigationMenu.List>

// 			<div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
// 				<NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
// 			</div>


// 		</NavigationMenu.Root>
// 	);
// };

// const ListItem = React.forwardRef(
// 	({ className, children, title, ...props }, forwardedRef) => {
//         // const navigate = useNavigate();

//         // function clicked()
//         // {
//         //     navigate(href)
//         // }
//         return (
//             (
// 		<li>
// 			<NavigationMenu.Link asChild>
// 				<button
// 					className={classNames(
// 						"block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
// 						className,
// 					)}
// 					{...props}
// 					ref={forwardedRef}
// 				>
// 					<div className="mb-[5px] font-medium leading-[1.2] text-violet12">
// 						{title}
// 					</div>
// 					<p className="leading-[1.4] text-mauve11">{children}</p>
// 				</button>
// 			</NavigationMenu.Link>
// 		</li>
// 	)
//         )
//     },
// );

// export default Navigation;



import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ModalDialog from './Dialog';

const navItemsTemplate = [
  {
    type: 'button',
    label: 'Home',
    path: '/',
    // className: 'block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent',
    // current: true,
  },
  {
    type: 'dropdown',
    label: 'Profile',
    dropdownId: 'dropdownNavbar',
    dropdownItems: [
      // { label: 'Dashboard' },
      // { label: 'Settings' },
      // { label: 'Earnings' },
    ],
    dropdownFooter: [
    ],
  },
  // {
  //   type: 'button',
  //   label: 'Services',
  // },
  // {
  //   type: 'button',
  //   label: 'Pricing',
  // },
  // {
  //   type: 'button',
  //   label: 'Contact',
  // },
];

const admin = [
  {
    label: "Admin",
    path: "/admin",
  }
]
const Navigation = () => {
    const [mouseEntererOn, setMouseEntererOn] = useState('');
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    // const [openSignOut, setOpenSignOut] = useState(false);
    
    const user = useUserAuth();
    const logOutUser = useLogout();
    const [navItems, setNavItems] = useState(navItemsTemplate);
    const navigate = useNavigate();
    useEffect(() => {
      console.log("In nav", user)
  setNavItems((prevItems) =>
    prevItems.map((item) => {
      if (item.type === 'dropdown') {
        // Base dropdown items (excluding 'View Books')
        let dropdownItems = (item.dropdownItems || []).filter(
          (dropdownItem) => !(dropdownItem.path.includes('admin'))
        );

        // Conditionally add 'View Books' if the user is an admin
        if (user?.user.role === 'Admin') {
          dropdownItems.push({
            label: 'Admin',
            path: '/admin/',
          });
        }

        return {
          ...item,
          dropdownItems,
        };
      }
      return item;
    })
  );
}, [user]);

useEffect(() => {
  setNavItems((prevItems) =>
    prevItems.map((item) => {
      if (item.type === 'dropdown') {
        // Set dropdown footer based on user login state
        const dropdownFooter = user?.isLoggedIn
          ? [
              {
                label: 'Sign Out',
                function: async () => {
                  console.log('Signing out...');
                  await logOutUser();
                },
              },
            ]
          : [
              {
                label: 'Sign Up',
                function: () => {
                  console.log('Signing up...');
                  setOpenSignUp(true);
                },
              },
              {
                label: 'Sign In',
                function: () => {
                  console.log('Signing in...');
                  setOpenSignIn(true);
                },
              },
            ];

        return {
          ...item,
          dropdownFooter,
        };
      }
      return item;
    })
  );
}, [user?.isLoggedIn]);



  const navigateTo = (path) => {
    navigate(path)
  }


  return (
    <nav className="bg-theme-primary text-theme-text-secondary rounded-lg sticky top-0 z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={()=>{navigateTo('/')}}
        >
          <Icon icon="healthicons:register-book" className='w-full h-full text-5xl'/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Keepers
          </span>
        </button>

        {/* <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}

        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {navItems.map((item, index) => {
              if (item.type === 'dropdown') {
                return (
                  <li key={index}
                    onMouseEnter={()=>{
                        setMouseEntererOn(item.label)
                    }}
                    onMouseLeave={()=>{
                        setMouseEntererOn('')
                    }}
                  >
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle={item.dropdownId}
                      
                      className="flex items-center justify-between w-full py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 hover:text-theme-text-hovered md:p-0 md:w-auto "
                    >
                      {item.label}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id={item.dropdownId}
                      className={`z-10 absolute font-normal bg-theme-primary text-theme-text-secondary ${user.isLoggedIn && "divide-y"} divide-theme-background rounded-lg shadow-sm w-auto 
                            ${mouseEntererOn === item.label ? "block": "hidden"}
                        `}
                    >
                      <ul
                        className="py-2 text-sm "
                        aria-labelledby="dropdownLargeButton"
                      >
                        {item.dropdownItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <button className="block w-full text-start px-4 py-2 hover:text-theme-text-hovered"
                              onClick={()=>{
                                console.log(subItem)
                                navigateTo(subItem.path)
                              }}
                            >
                              {subItem.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div>
                        {
                        item.dropdownFooter && item.dropdownFooter.length > 0 && (
                          item.dropdownFooter.map(footerItem =>(
                            <div className="py-0">
                        <button className="w-full px-3 py-2 text-sm text-start text-theme-text-secondary hover:text-theme-text-hovered hover:bg-theme-primary-hovered"
                          onClick={footerItem.function}
                        >
                            {footerItem.label}
                          </button>
                        </div>
                          ))
                        )
                      }
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={index}>
                  <button
                    className=
                      {`block py-2 px-3 rounded-sm  md:border-0  hover:text-theme-text-hovered ${item.className} md:p-0`}
                    
                    aria-current={item.current ? 'page' : undefined}
                    onClick={()=>{
                      // console.log("check", item);
                      navigateTo(item.path)
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ModalDialog
            isOpen = {openSignIn} close = {()=>{
              setOpenSignIn(false)
            }}
            title = {`Sign in`}
          >
            <SignInForm onClose = {()=>{
              setOpenSignIn(false)
            }} />
      </ModalDialog>
      <ModalDialog
            isOpen = {openSignUp} close = {()=>{
              setOpenSignUp(false)
            }}
            title = {`Sign Up`}
          >
            <SignUpForm onClose = {()=>{
              setOpenSignUp(false)
              setOpenSignIn(true)
            }} />
      </ModalDialog>
    </nav>
  );
};

export default Navigation;
