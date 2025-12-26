import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import {
    MapPin,
    Camera,
    CheckCircle2,
    AlertTriangle,
    Trash2,
    PhoneOff,
    FileBarChart,
    ChevronRight,
    ShieldCheck,
    Users,
    Building2,
    ArrowRight,
    Search,
    Fingerprint,
    Smartphone
} from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900">
            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xl font-heading">C</div>
                        <span className="font-heading font-bold text-xl tracking-tight text-gray-900">CivicLens</span>
                    </div>

                    <div className="hidden md:flex items-center gap-10">
                        <a href="#how-it-works" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">How it works</a>
                        <a href="#benefits" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">Benefits</a>
                        <a href="#about" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">About</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            className="hidden md:flex font-medium text-gray-600 hover:text-primary"
                            onClick={() => alert("Login coming soon!")}
                        >
                            Log in
                        </Button>
                        <Button
                            className="bg-primary hover:bg-primary-dark text-white rounded-lg px-6 py-2 font-medium transition-all shadow-sm hover:shadow-md"
                            onClick={() => alert("Sign up coming soon!")}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-4 bg-white border-b border-gray-100">
                <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <div className="space-y-8">
                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                            Build Better Cities <br />
                            <span className="text-primary">Together.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed font-light">
                            Report issues instantly. Track progress in real-time. Join the movement for cleaner, safer neighborhoods.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                size="lg"
                                className="h-14 px-8 rounded-xl bg-primary text-white hover:bg-teal-800 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                onClick={() => alert("Report coming soon!")}
                            >
                                Report an Issue
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 text-lg font-medium"
                            >
                                View Live Map
                            </Button>
                        </div>
                    </div>

                    {/* Right: Modern Vector Graphic / Mockup */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                            {/* Mockup Base */}
                            <div className="aspect-[4/3] bg-gray-50 relative p-8 flex items-center justify-center">
                                {/* Abstract Map UI */}
                                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=22.7196,75.8577&zoom=13&size=600x400&scale=2&style=feature:all|saturation:-100&key=YOUR_API_KEY')] opacity-5 bg-cover bg-center" />

                                {/* Phone Mockup */}
                                <div className="relative w-64 h-[500px] border-8 border-gray-900 rounded-[3rem] bg-white shadow-2xl flex flex-col overflow-hidden">
                                    <div className="h-8 bg-gray-900 w-full absolute top-0 left-0 z-20 rounded-t-[2.5rem] flex justify-center">
                                        <div className="w-20 h-4 bg-black rounded-b-xl" />
                                    </div>
                                    <div className="flex-1 bg-gray-50 p-4 pt-12 space-y-4">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                            <div className="flex gap-3 items-center mb-2">
                                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500"><AlertTriangle size={14} /></div>
                                                <div>
                                                    <div className="text-xs font-bold text-gray-900">Pothole Alert</div>
                                                    <div className="text-[10px] text-gray-500">MG Road • 2m ago</div>
                                                </div>
                                            </div>
                                            <div className="h-20 bg-gray-200 rounded-lg w-full" />
                                        </div>
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                            <div className="flex gap-3 items-center mb-2">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><CheckCircle2 size={14} /></div>
                                                <div>
                                                    <div className="text-xs font-bold text-gray-900">Garbage Cleared</div>
                                                    <div className="text-[10px] text-gray-500">Vijay Nagar • 1h ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-6">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center"><Smartphone size={16} /></div>
                                        <div className="w-6 h-6 rounded-full bg-gray-100" />
                                        <div className="w-6 h-6 rounded-full bg-gray-100" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Benefits Section (Cards) */}
            <section id="benefits" className="py-24 bg-[#F9FAFB]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                <Camera size={32} />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Report Instantly</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Simply snap a photo and confirm the location. Our app handles the rest, ensuring your report reaches the right department immediately.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-accent">
                                <Fingerprint size={32} />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Smart AI Categorization</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our intelligent system automatically identifies issue types and priorities, removing duplicates and routing swiftly.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                                <FileBarChart size={32} />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Transparent Tracking</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Follow your report's journey in real-time. Get notifications when status changes and see the final resolution proof.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. How It Works (Process Steps) */}
            <section id="how-it-works" className="py-24 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-xl text-gray-500">Three simple steps to a better city.</p>
                    </div>

                    <div className="relative grid md:grid-cols-3 gap-12 text-center">
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-gray-100 -z-10" />

                        {/* Step 1 */}
                        <div className="flex flex-col items-center bg-white">
                            <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary shadow-sm mb-6">1</div>
                            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Capture Issue</h3>
                            <p className="text-gray-600">Take a photo of the problem.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center bg-white">
                            <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary shadow-sm mb-6">2</div>
                            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Confirm Location</h3>
                            <p className="text-gray-600">Verify the GPS tag is accurate.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center bg-white">
                            <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary shadow-sm mb-6">3</div>
                            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Track & Resolve</h3>
                            <p className="text-gray-600">Updates sent directly to your phone.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. AI Advantage Section */}
            <section className="py-24 bg-[#F9FAFB]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Visual Left */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -z-0" />
                            <div className="space-y-6 relative z-10">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-accent"><Search size={20} /></div>
                                    <div className="flex-1">
                                        <div className="h-2 w-24 bg-gray-300 rounded mb-2" />
                                        <div className="h-2 w-32 bg-gray-200 rounded" />
                                    </div>
                                    <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">Matched</div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 opacity-60">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500"><AlertTriangle size={20} /></div>
                                    <div className="flex-1">
                                        <div className="h-2 w-20 bg-gray-300 rounded mb-2" />
                                        <div className="h-2 w-28 bg-gray-200 rounded" />
                                    </div>
                                    <div className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">High Priority</div>
                                </div>
                            </div>
                        </div>

                        {/* Text Right */}
                        <div>
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 rounded-full bg-blue-100 text-accent text-sm font-bold">Civic AI</span>
                            </div>
                            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-8">The AI Advantage</h2>
                            <ul className="space-y-6">
                                {[
                                    "Auto-detect issue type from images",
                                    "Remove duplicate reports instantly",
                                    "Assign priority scores for authorities",
                                    "Predict completion timelines"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="text-lg text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Who It's For (Dual Cards) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Citizens */}
                        <div className="group rounded-3xl p-10 bg-blue-50/50 border border-blue-100 hover:border-blue-200 transition-colors">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
                                <Users size={28} />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">For Citizens</h3>
                            <p className="text-gray-600 mb-8 text-lg">Empower yourself to make a change. Report issues instantly and see the impact.</p>
                            <Button className="bg-white text-primary hover:bg-blue-50 border border-primary/20 w-auto">
                                Download App
                            </Button>
                        </div>

                        {/* Authorities */}
                        <div className="group rounded-3xl p-10 bg-blue-50/50 border border-blue-100 hover:border-blue-200 transition-colors">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm mb-6">
                                <Building2 size={28} />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">For Authorities</h3>
                            <p className="text-gray-600 mb-8 text-lg">Streamline complaints with our AI dashboard and workforce management tools.</p>
                            <Button className="bg-white text-accent hover:bg-blue-50 border border-accent/20 w-auto">
                                Request Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Final CTA */}
            <section className="py-32 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Build Better Cities Together!</h2>
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            className="h-16 px-12 rounded-full bg-white text-primary hover:bg-gray-100 text-xl font-bold shadow-2xl"
                            onClick={() => alert("Registration coming soon!")}
                        >
                            Start Now
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-12 bg-gray-50 text-gray-400 text-sm border-t border-gray-200">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-500">C</div>
                        <span className="font-bold text-gray-500">CivicLens</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
