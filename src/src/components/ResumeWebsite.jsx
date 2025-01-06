import React from 'react';
import { Mail, MapPin, Phone, Linkedin, ChevronRight } from 'lucide-react';

const ResumeWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Kevin Hicks</h1>
          <p className="text-xl text-blue-200 mb-6">Global CIO - Shared Business Technology</p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Charlotte, NC</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(704) 287-1636</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>KevinHicksCLT@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <a href="https://www.linkedin.com/in/kevinhickscharlotte" className="hover:text-blue-200 transition-colors">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>
          <p className="text-gray-600 leading-relaxed">
            Global CIO with 28 years of experience working for and with global financial services institutions defining 
            strategies, designing solutions, executing large scale programs and managing large application portfolios. 
            Current responsibilities include managing a 400-person global team, $40M base budget and $100M+ 
            initiative portfolio driving transformational change across commercial underwriting technology.
          </p>
        </section>

        {/* Expertise Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'IT Strategy & Execution',
              'Applied Artificial Intelligence (AI)',
              'Commercial Insurance',
              'Solution Architecture',
              'Global Team Management',
              'Global Transaction Banking',
              'Integration Technology',
              'Financial Management',
              'Application Management'
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                <ChevronRight size={16} className="text-blue-500" />
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Experience</h2>
          
          {/* Current Role */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Global CIO - Shared Business Technology</h3>
                <p className="text-blue-600">AIG</p>
              </div>
              <span className="text-gray-500">Aug 2022 – Present</span>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Manage a portfolio of 40+ strategic applications that primarily serve the global standard commercial underwriting process</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Lead AI Center of Excellence including establishing organization, governance, vendor management, proofs of concept/value, rollout and adoption</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Led operating model transformation from siloed IT project delivery to global shared service delivery model</span>
              </li>
            </ul>
          </div>

          {/* Previous Roles */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">SVP Portfolio Strategy & Solution Architecture</h3>
                <p className="text-blue-600">AIG</p>
              </div>
              <span className="text-gray-500">Dec 2017 – July 2022</span>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Lead General Insurance Strategy & Architecture team developing portfolio architecture strategies and solution architecture designs</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Developed the Global General Insurance IT Strategy and architecture playbook for the Standard Commercial Underwriting Program, a $250M three-year global transformation program saving $1B in annual operating expense</span>
              </li>
            </ul>
          </div>

          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">SVP Global Strategy and Architecture</h3>
                <p className="text-blue-600">Bank of America</p>
              </div>
              <span className="text-gray-500">Dec 2013 – Nov 2017</span>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Led global team of domain and solution architects across wholesale banking channels, integration technology, client servicing and fulfillment systems</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Head Global API Strategy program across consumer, wealth management, global wholesale and markets technology divisions</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Developed architecture strategy for new digital payment capability enabling commercial customers to send payments to digital wallet recipients</span>
              </li>
            </ul>
          </div>

          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Product Solutions Executive</h3>
                <p className="text-blue-600">Bottomline Technologies</p>
              </div>
              <span className="text-gray-500">Jun 2011 – Nov 2013</span>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Responsible for defining product strategy for Bottomline's online and mobile treasury management offering</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Designed new client onboarding and cash flow forecasting modules partnering with global banking clients</span>
              </li>
            </ul>
          </div>

          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Senior Product Manager</h3>
                <p className="text-blue-600">BMO Harris Bank (formerly M&I Bank)</p>
              </div>
              <span className="text-gray-500">Apr 2008 – May 2011</span>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Responsible for managing online cash management channel offering</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Developed platform and segmentation strategy that reduced operating costs by 18%</span>
              </li>
            </ul>
          </div>

          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Senior Manager – Banking Practice</h3>
                <p className="text-blue-600">Capgemini</p>
              </div>
              <span className="text-gray-500">Feb 2005 – Mar 2008</span>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Led Wachovia 70+ person International ACH program and Canadian Image Lockbox project</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Identified and sold two new accounts for Capgemini: Bank of America & M&I generating $2M in revenue in 2007</span>
              </li>
            </ul>
          </div>

          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Principle Consultant</h3>
                <p className="text-blue-600">ACI Worldwide (formerly S1 Corporation)</p>
              </div>
              <span className="text-gray-500">Sep 1999 - Feb 2005</span>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Led project definition studies with prospects and clients, defined gaps, created functional specifications and managed deliveries</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Served as primary liaison with bank executives, product, development, and testing managers for FleetBoston, US Bank, CIBC and Bank of America</span>
              </li>
            </ul>
          </div>

          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Operations Manager</h3>
                <p className="text-blue-600">Wells Fargo (formerly Wachovia)</p>
              </div>
              <span className="text-gray-500">Jul 1996 – Aug 1999</span>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Responsible for Integrated Payables & Receivables and EDI operations for heritage Wachovia</span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Coordinated $7M annual budget and identified direct billing system for overnight charges saving $50k per year</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">East Carolina University</h3>
              <p className="text-gray-600">Business Administration (concentration Finance) - 1995</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Professional Certification</h3>
              <p className="text-gray-600">Certified Treasury Professional (CTP) - 2000</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500">
          <p>© 2024 Kevin Hicks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeWebsite;
