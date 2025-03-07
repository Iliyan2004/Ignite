import React, { useState } from "react"
import runman from "../images/runman.png"
import { Button } from "../../components/elements/Elements"

export const Hero = ({ isVisible }) => {
    return (
        <div className="relative m-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className={` transform transition-all duration-1000 ${isVisible.hero ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <div class="text-[#1E1E1E] space-y-2 dark:text-white">
                        <h1 class="text-[150px] font-bold tracking-tight">
                            <span class="text-[150px] block text-transparent bg-clip-text bg-red-500 transform transition-all duration-1000 delay-500">
                                IGNITE
                            </span>
                            <span class="block transform transition-all duration-500">
                                YOUR LIFE
                            </span>
                        </h1>
                        <p class="text-xl text-[#1E1E1E] max-w-2xl mx-auto leading-relaxed dark:text-white transition-all duration-500">
                            Running is not just an exercise,<br />
                             it's a lifestyle.
                        </p>
                        <div class="flex justify-start gap-4 mt-8">
                            <button class="px-4 py-2 rounded-lg font-medium hover:scale-105 transform transition-all duration-300 flex items-center gap-2 bg-[#FF3B00] hover:bg-[#ff5a2b] text-white group bg-red-500 from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                                Start Now
                            </button>
                            <Button className="group hover:scale-105 transform transition-all duration-300" variant="secondary">
                                Watch Demo
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </Button>
                        </div>
                    </div>
                    {/* <Button 
                size="lg"
                className="group hover:scale-105 transform transition-all duration-300"
              >
                Start Now
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Button> */}
                </div>
                <div
                    className={`md:w-1/2 mt-10 md:mt-0 transform transition-all duration-1000 ${isVisible.hero ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                        }`}
                >
                    <div className="relative">
                        {/* <div 
                        // use the background from body or section tag and apply the gradient from solid to transparent, the gradient should apply after 50 percent of the image
                        className="absolute inset-0 bg-gradient-to-b from-white to-transparent"
                            style={{ 
                                background: 'linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%)',
                                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                            }}
                        /> */}
                        <img
                            src={runman}

                            alt="Runner"
                            className="rounded-lg drop-shadow-2xl hover:shadow-red-500/20 transition-all duration-500 relative hover:scale-105 hover:drop-shadow-2xl transform"
                            style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
