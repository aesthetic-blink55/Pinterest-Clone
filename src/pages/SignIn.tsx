import { SignIn as ClerkSignIn } from '@clerk/clerk-react'
import background from '/background.jpeg'

const SignIn = () => {
    return (
        <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
            <img
                src={background}
                alt="Background"
                className="absolute h-full w-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex flex-col items-center justify-center px-6">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-white drop-shadow-md">
                        Pinterest
                    </h1>
                    <p className="text-gray-200 mt-1">Sign in to continue</p>
                </div>

                <div className="max-w-sm w-full">
                    <ClerkSignIn
                        appearance={{
                            elements: {
                                formButtonPrimary:
                                    "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition",
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SignIn