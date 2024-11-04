import React, { useState } from 'react';
import ApplicationPopup from "../Components/ApplicationPopup";


function ApplicationProcess  () {
  const [showApplicationPopup, setApplicationPopup] = useState(false);

  return (

    <section className="mb-12  p-6 font-dmsans">
      
      <p className="mb-4">At the start of each semester, we open applications for aspiring student entrepreneurs. You’ll have 10 days to apply.</p>
      <ol className="list-decimal ml-6">
        <li className="mb-2">Submit your application through our portal.</li>
        <li className="mb-2">Our expert review committee evaluates all applications.</li>
        <li className="mb-2">Standout ideas will be invited to join the Pratham program.</li>
      </ol>
      <p className="mt-4">Are you ready to embark on your entrepreneurial journey? <span className="text-green-600 font-semibold cursor-pointer"onClick={() => setApplicationPopup(true)}
      >Apply Now</span></p>
      <ApplicationPopup isVisible={showApplicationPopup} onClose={() => setApplicationPopup(false)}>
        <div>
          <form>
            <div className="flex text-center p-2 text-lg">
              <span className="flex-grow font-bold text-red-600">
                Application Closed !
              </span>
              
            </div>
          </form>
        </div>
      </ApplicationPopup>
    </section>
    
  );
}

export default ApplicationProcess;