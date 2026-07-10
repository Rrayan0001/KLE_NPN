'use client';

import SubpageLayout from '@/components/SubpageLayout';

export default function BankPage() {
  return (
    <SubpageLayout breadcrumb="Bank">
      <div className="main-content py-5">
        <div className="container">
          <div className="about-page py-5">
            <div className="container py-xl-5 py-lg-3">
              <h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">
                Bank
                <span className="font-weight-bold"></span>
              </h3>
              <br /><br />
              <img
                src="/images/bank1.png"
                alt="Canara Bank branch on the college campus"
                className="img-fluid"
              />
              <br /><br />
              <p style={{ textAlign: 'justify' }}>
                <strong style={{ color: '#0e0e0e', fontSize: '18px' }}>
                  Our College has Bank and ATM facility provided for the students and the staff. The branch of Canara Bank is available in the campus. The collections of various fees and fines are done through bank challans which are collected at bank for transparency. Scholarships are deposited directly to the student’s accounts through bank. Students have accounts in the bank. Institutions financial transactions are done through the bank only.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
