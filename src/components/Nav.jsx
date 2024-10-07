import { UserButton, useUser, SignInButton, SignUpButton } from '@clerk/clerk-react';
import React from 'react';

const Nav = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="w-full flex justify-center items-center z-50">
      <div className="qwe w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-10 absolute top-4 rounded-md flex items-center justify-between px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-white">DoodleSense</h1>
        <div>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <div className="flex gap-2">
              <SignInButton>
                <button className="text-xs sm:text-sm md:text-base lg:text-lg text-white bg-blue-500 px-2 sm:px-3 py-1 rounded">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="text-xs sm:text-sm md:text-base lg:text-lg text-white bg-green-500 px-2 sm:px-3 py-1 rounded">Register</button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
