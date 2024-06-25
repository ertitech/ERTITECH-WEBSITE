import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderEr from "../Header Footer/HeaderEr";
import Banner from "../Header Footer/Banner";
import FooterEr from "../Header Footer/FooterEr";
import { FaHandPointRight,FaRegHandPointRight } from "react-icons/fa";
import "./Terms.css";

function TermsAndConditions() {
  return (
    <>
      <HeaderEr />
      <Banner
        title="Terms & Conditions"
        belowText="Home &gt; T&C Informations"
        imageSrc="https://i.postimg.cc/rF1ZgwVp/top-banner-strip.png"
      />
      <div className="container-fluid termscon my-5">
        <Row>
          <Col>
            <h4 className="tit">
              Our <span style={{ color: "#e44a20", fontWeight: "bold" }}>
                 Terms & Conditions{" "}
              </span>
            </h4>
            <div className="lastupdate mb-3 ">Last Updated: 1st April 2024</div>
            <p className="para">
              Please read the Terms and Conditions outlined below carefully
              before agreeing to them. If you do not agree to these Terms and
              Conditions (including any referenced policies or guidelines),
              please immediately discontinue your use of the Website/Service and
              Products.
            </p>
            <p className="para">
              The Terms and Conditions shall apply to the use of
              www.ertitech.com (hereinafter referred to as the 'website'), the
              official website of ERTITECH SOLUTIONS PVT LTD (Ertitech), located
              at No-7, G1, Bharathiyar Street, Prashanti Nagar, Chromepet,
              Chennai-600044, Tamil Nadu, India, CIN-U72900TN2022PTC14897, and
              GSTIN - 33AAGCE8342L1ZF.
            </p>

            <h5 className="termtext">General Terms</h5>
            <p className="para">
              An individual, entity, or any person accessing or using the
              website, hereinafter referred to as a ‘USER,’ ‘SELLER,’ ‘YOU,’
              ‘MERCHANT,’ ‘PARTNER,’ or ‘CLIENT,’ shall be presumed to have read
              the Terms and Conditions (which also include the Privacy Policy,
              Chargeback Policy, Cookies Policy) and to have unconditionally and
              irrevocably accepted the Terms and Conditions set forth herein.
            </p>
            <p className="para">
              Ertitech Solutions Private Limited or Ertitech, the website
              (www.ertitech.com) offers a payment platform through orchestration
              model assisting users in collecting payments from their
              end-users/customers for the purchase of goods and services using
              debit cards, credit cards, UPI, net banking, wallets, and other
              accepted payment instruments.
            </p>
            <p className="para">
              Ertitech has entered partnerships with multiple banks, payment
              service providers (as defined under the Payment and Settlement
              Systems Act, 2007), card associations, and other payment
              processing system providers to enable the use of online payment
              gateways developed by/for them. It should also be clarified that
              these payment transactions are authenticated, authorized, and
              processed by card associations, acquirers, and issuing banks
              through a payment system provider’s payment gateway only, Ertitech
              functions as a payment orchestration platform that connects
              merchants to multiple PSPs, acquirers, and payment partners,
              allowing them to manage everything from a single interface. We are
              not involved in the clearing or payment of the transaction.
            </p>
            <p className="para">
              These Terms and Conditions, the website www.ertitech.com, and the
              services provided by Ertitech are intended solely for individuals
              who can form legally binding contracts under Indian law and are 18
              years of age or older. Any access to or use of the website or
              services by anyone under 18 is expressly prohibited. By using the
              website or services, the user represents and warrants that they
              are 18 or older and can enter a contract. The user also agrees
              that their payer/payee is likewise capable of entering into a
              contract.
            </p>
            <p className="para">
              All these terms, policies defined herewith constitute a binding
              and enforceable agreement between the User & Ertitech and user
              affirms and guarantees that they possess full power and authority
              to use the services and are in strict adherence to all applicable
              laws.
            </p>
            <p className="para">
              The Terms & Conditions may be revised or updated or changed by us
              at our sole discretion at any time without any prior intimation to
              the User. The latest Terms & Conditions will be posted here. Any
              such changes by Ertitech will be effective immediately. By
              continuing to use this Website or to access the Services / usage
              of our Services after changes are made, you agree to be bound by
              the revised/ amended Terms & Conditions and such amendments shall
              supersede all other Terms & Conditions previously accepted by the
              User. You are solely responsible for understanding and complying
              with all applicable laws of your specific jurisdiction, including
              but not limited to the provisions of the RBI Guidelines on
              Regulation of Payment Aggregators and Payment Gateways, Payment
              and Settlement Systems Act, 2007, Prevention of Money Laundering
              Act, 2002, Know Your Customer (KYC) / Anti-Money Laundering (AML)
              / Combating Financing of Terrorism (CFT) guidelines issued by the
              Department of Regulation, RBI (the "KYC GUIDELINES") etc., that
              may be applicable to you in connection with your business and use
              of our Services
            </p>

            <h5 className="termtext">Definitions</h5>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              ‘We’ ‘Us’ ‘Ours’ ‘Affiliates’ ‘Our’ refers to Ertitech Solutions
              Private Limited.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              ‘You’ ‘User’ ‘Merchant’ ‘Yourself’ ‘Your’ refers to
              registered/non-registered individual, companies, sellers, who are
              into the business of providing services/goods.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Financial institutions, Telecom service providers, Payment network
              switches, Payment service providers refers to ‘Our’ ‘Business
              partners’.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              ‘End users’ ‘Customers’ refer to the individual, group entity,
              corporates, who avail services/goods from the merchant or business
              partners directly.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Website, Website(s) refers to{" "}
              <a href="https://www.ertitech.com">www.ertitech.com</a>
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Services, Service refer to the list of services provided by
              Ertitech and its affiliates.
            </p>

            <h5 className="termtext">Service Guidelines for Users</h5>
            <p className="para">
              We are committed to providing you with a seamless and secure
              payment experience. Please review the following guidelines to
              ensure that you get the most out of our services while maintaining
              a safe and efficient payment environment.
            </p>

            <h6 className="termtext">Account Registration:</h6>
            <p className="para">
            <FaHandPointRight className="tpicon" /> Users are required to register an account with accurate and
              up-to-date information.
            </p>
            <p className="para">
            <FaHandPointRight className="tpicon" /> Each user account is for individual use only and should not be
              shared with others.
            </p>

            <h6 className="termtext">Security Measures:</h6>
            <p className="para">
            <FaHandPointRight className="tpicon" /> Keep your account credentials, including username and password,
              confidential at all times.
            </p>
            <p className="para">
            <FaHandPointRight className="tpicon" /> Enable two-factor authentication for an added layer of
              security.
            </p>
            <p className="para">
            <FaHandPointRight className="tpicon" /> Report any unauthorized access or suspicious activity on your
              account immediately to our customer support team.
            </p>

            <h6 className="termtext">Payment Transactions:</h6>
            <p className="para">
            <FaHandPointRight className="tpicon" /> Ensure that all payment transactions initiated through our
              platform are legitimate and authorized by you.
            </p>
            <p className="para">
            <FaHandPointRight className="tpicon" /> Review transaction details carefully before confirming payment
              to avoid errors or discrepancies.
            </p>
            <p className="para"><FaHandPointRight className="tpicon" /> Compliance with Laws and Regulations.</p>
            <p className="para">
            <FaHandPointRight className="tpicon" /> Users are responsible for complying with all applicable laws
              and regulations governing their use of our services, including but
              not limited to anti-money laundering (AML) and know your customer
              (KYC) requirements.
            </p>

            <h6 className="termtext">Prohibited Activities:</h6>
            <p className="para">
            <FaHandPointRight className="tpicon" /> The following activities are strictly prohibited on our
              platform.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" /> Engaging in fraudulent or illegal transactions.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" /> Using stolen or unauthorized payment information.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" /> Violating the intellectual property rights of others.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" /> Any activity that may cause harm or disruption to our services
              or other users.
            </p>

            <h6 className="termtext">Data Privacy and Confidentiality:</h6>
            <p className="para">
              <FaHandPointRight className="tpicon" /> We are committed to protecting your privacy and safeguarding
              your personal information in accordance with our privacy policy.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" /> Users should refrain from sharing sensitive personal or
              financial information in public forums or through unsecured
              channels.
            </p>

            <h6 className="termtext">Customer Support:</h6>
            <p className="para">
              Our customer support team is available to assist you with any
              inquiries, concerns, or technical issues you may encounter. Please
              contact our support team through the designated channels provided
              on our website or platform.
            </p>

            <h6 className="termtext">Feedback and Suggestions:</h6>
            <p className="para">
              We value your feedback and suggestions for improving our services.
              Please feel free to share your thoughts with us through our
              feedback form or customer support channels.
            </p>

            <h6 className="termtext">Service Updates and Notifications:</h6>
            <p className="para">
              Stay informed about service updates, new features, and important
              announcements by regularly checking our website or subscribing to
              our newsletter.
            </p>

            <h6 className="termtext">Termination of Service:</h6>
            <p className="para">
              Ertitech reserves the right to suspend or terminate user accounts
              that violate our terms of service or engage in prohibited
              activities without prior notice.
            </p>

            <h5 className="termtext">Risk mitigation and control mechanism</h5>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              You hereby consent to the process we employ for 'Risk Mitigation
              and Control Mechanism.'
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              You hereby undertake to promptly provide the KYC requirements in
              accordance with the procedures and policies of Ertitech as
              necessary. If the KYC due diligence is not entirely satisfied,
              settlement shall be withheld until the requirement is met.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              You hereby commit to identifying and mitigating 'Stolen/Lost Card
              Transactions,' 'Product Abuse,' 'Return to Origin,' 'AML,' and
              other fraudulent transactions. Thus, you are advised to take
              necessary precautions to prevent such incidents. If any issues are
              identified from our end, then: (1) Settlement shall be withheld
              (2) Limits may be reduced or MID temporarily blocked (3) Relevant
              documents pertaining to transactions, delivery receipts, invoices,
              KYC of users, merchants, etc., may be requested for submission.
              Ertitech's decision remains final in such instances, and Ertitech
              shall not be held liable for any penalties, damages, losses,
              refunds, compensations, or reimbursements.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              You hereby acknowledge that Ertitech may seek assistance from
              third-party service providers for Risk and Fraud Mitigation in
              these fraudulent incidents.
            </p>

            <h5 className="termtext">
              Terms of Service, Fees, and Payments options:
            </h5>
            <p className="para">
              You hereby agree to the below illustrated terms if you are started
              using the ‘Ertitech Services’.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Ertitech act as an intermediary (IT act 2000) between the ‘User’
              and ‘Merchant’ to provide the Ertitech payment platform for online
              payment transaction purposes. We thereby charge you a fee(s)
              (Platform maintenance fee, Convenience fee, Setup fee) which will
              be displayed upfront over and above the actual amount.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Merchants are hereby agreeing to pay all fees associated with the
              services as outlined and we have the rights to modify fees on
              time-to-time.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              We are not liable for any disputes, services lapses, issues,
              damage goods, warranties, guaranties, time-delay aroused. Users
              are hereby requested to take it up directly with the Merchant for
              resolution.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Ertitech is offering a technology solution acting as a reseller of
              digital products; we do not provide any services directly. Users
              are instructed to satisfy yourself regarding the Services/Products
              before purchasing the same.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Ertitech is not liable to refund any erroneous transaction of
              amount between ‘User’ and ‘Merchant’.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              You are hereby agreeing, by browsing/using of any web-link on the
              3rd party website, you shall be liable to the terms and conditions
              of such web-link.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              In the event of any disputes, you agree with fullest co-operation
              and Ertitech artifacts, records shall be conclusive evidence of
              the transactions, Ertitech stance remains final
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Ertitech does not store the card details of the Users in any form.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Payments made through our platform are secure, and users are
              encouraged to report any unauthorized transactions immediately.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Payment Gateway payment modes like Credit Card, Debit Card, UPI,
              and Netbankings are available to the users while accessing our
              Ertitech platform to make payments.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Ertitech sends all communication via Sms and or email and they
              shall be deemed to have been received by ‘User’ after they have
              submitted to the Sms/email service provider.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" /> You hereby give consent to
              Ertitech for sending marketing and promotional messages to your
              SMS/email. Kindly notify us via email –{" "}
              <a href="mailto:hello@ertitech.com">hello@ertitech.com</a> if you
              do not want.
            </p>

            <h5 className="termtext">
              Banned merchant category as per bank policy
            </h5>
            <p className="para">
              You are giving a consent of not involving your business into
              following activities and if any violation witnessed then
              immediately settlement will be kept hold and account will be
              terminated.
            </p>

            <p className="para">
              <FaHandPointRight className="tpicon" />
              Adult goods and services which includes pornography and other
              sexually suggestive materials (including literature, imagery, and
              other media); escort or prostitution services
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Alcohol which includes Alcohol or alcoholic beverages such as
              beer, liquor, wine, or champagne.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Body parts which include organs or other body parts
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Bulk marketing tools which include email lists, software, or other
              products enabling unsolicited email messages (spam)
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Cable descramblers and black boxes which includes devices intended
              to obtain cable and satellite signals for free
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Child pornography which includes pornographic materials involving
              minors
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Copyright unlocking devices which include Mod chips or other
              devices designed to circumvent copyright protection
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Copyrighted media which includes unauthorized copies of books,
              music, movies, and other licensed or protected materials;
              Copyright infringing merchandise
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Products labelled as "tester," "not for retail sale," or "not
              intended for resale"
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Copyrighted software which includes unauthorized copies of
              software, video games and other licensed or protected materials,
              including OEM or bundled software
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Counterfeit and unauthorized goods which includes replicas or
              imitations of designer goods; items without a celebrity
              endorsement that would normally require such an association; fake
              autographs, counterfeit stamps, and other potentially unauthorized
              goods
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Products that have been altered to change the product's
              performance, safety specifications, or indications of use
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Drugs and drug paraphernalia which includes hallucinogenic
              substances, illegal drugs, and drug accessories, including herbal
              drugs like salvia and magic mushrooms
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Drug test circumvention aids which include drug cleansing shakes,
              urine test additives, and related items
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Endangered species which includes plants, animals, or other
              organisms (including product derivatives) in danger of extinction
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Government IDs or documents which includes fake IDs, passports,
              diplomas, and noble titles
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Hacking and cracking materials which includes manuals, how-to
              guides, information, or equipment enabling illegal access to
              software, servers, websites, or other protected property
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Illegal goods which include materials, products, or information
              promoting illegal goods or enabling illegal acts
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Miracle cures which include unsubstantiated cures, remedies or
              other items marketed as quick health fixes
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Offensive goods which include literature, products or other
              materials that: a) Defame or slander any person or groups of
              people based on race, ethnicity, national origin, religion, sex,
              or other factors b) Encourage or incite violent acts c) Promote
              intolerance or hatred
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Offensive goods, crime which includes crime scene photos or items,
              such as personal belongings, associated with criminals
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Pyrotechnic devices (apart from the ones mentioned in the
              restricted category), hazardous materials and radioactive
              materials and substances
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Tobacco and cigarettes which includes cigars, chewing tobacco, and
              related products. Electronic cigarettes (e-cigarettes)
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Traffic devices which include radar detectors/jammers, license
              plate covers, traffic signal changers, and related products
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Weapons which include firearms, ammunition, knives, brass
              knuckles, gun parts, and other armaments
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Matrix sites or sites using matrix scheme approach/Ponzi/Pyramid
              schemes
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Work-at-home information
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Any product or service which is not in compliance with all
              applicable laws and regulations whether federal, state, local or
              international including the laws of India 29 BPO services
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Surgical products on B2C model
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Immigration services (Does not include Consultation)
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Loose diamonds
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Guaranteed Employment Services
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Religious products which are making false claims or hurting
              someone's religious feelings
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Adoption agencies
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Pawnshop
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Esoteric pages, Psychic consultations
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Telemarketing (Calling list, selling by phone for example travel
              service, overall sales)
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Credit Counselling/Credit Repair Services
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Get Rich Businesses
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Bankruptcy Services
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Websites depicting violence and extreme sexual violence
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Bestiality
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Fireworks
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Cryptocurrency Trading
            </p>

            <h5 className="termtext">Refund and Cancellations policy</h5>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Ertitech does not have any Refund & Cancellations policies, as we
              do not provide any services directly.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              If any request for refunds/cancellations of any transaction(s)
              aroused, Ertitech can act as an intermediary, User can inform us
              with an adequate detail. Ertitech shall connect with respective
              ‘Merchant’ for getting clarification/resolutions with a TAT of 21
              working days from the date of receipt of email, however we are not
              liable for any extension or delay in TAT.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              If, in the event of a merchant requesting refunds/cancellation of
              any transaction(s) with the necessary documentation and details,
              Ertitech will initiate the request with the respective acquiring
              bank for review and processing within a TAT (Turnaround Time) of
              21 working days from the date of email receipt. However, we are
              not responsible for any extension or delay in TAT from the
              acquiring bank's end.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              <b> Ertitech UPI & QR Code</b> transaction disputes, chargebacks
              will be handled as per bank policies. Merchant must submit the
              relevant documents related to the UPI/QR code transactions when
              requested. Ertitech shall not be liable for any penalties,
              disputes, claims under any circumstances. Ertitech has rights to
              hold the merchant settlement till the Chargeback and dispute got
              resolve as per bank policies.
            </p>
            <>
              <p className="para">
              <FaRegHandPointRight className="tpicon" style={{marginLeft:'30px'}}/> 
                In the event of merchant not processing the refunds within
                5-days, Ertitech shall initiate the refunds and it will be made
                to the transaction originated bank account or card instrument
                only,
              </p>
              <p className="para">
              <FaRegHandPointRight className="tpicon" style={{marginLeft:'30px'}}/> 
                Ertitech shall have the rights to recover from the next
                settlement to refund the disputed amount. Government taxes
                cannot be refunded.
              </p>
              <p className="para">
              <FaRegHandPointRight className="tpicon" style={{marginLeft:'30px'}}/> 
                If the recover amount is lesser that the actual refund amounts
                then we shall raise a ‘debit note’ with respect to such amount
                or shall settle the remaining in future settlement.
              </p>
            </>

            <h5 className="termtext">Termination</h5>
            <p className="para">
              ‘User’ agrees that Ertitech at its sole discretion may terminate
              your contract without prior notice and restrict your access to
              Ertitech services if we identify any suspicious, fraudulent
              activities violating the terms and conditions and privacy
              policies. You consent that in case Ertitech suffers losses, not
              limited to monetary losses, due to Your actions, we can take
              injunctive relief or any other legal action as deemed necessary
              within the said circumstances and Ertitech shall not be liable for
              any of your losses due to termination. Upon termination you must
              uninstall the mobile apps and delete any copies of the services
              from your system/mobile or any other devices permanently.
            </p>

            <h5 className="termtext">Indemnification</h5>
            <p className="para">
              The 'User' shall indemnify and hold harmless, Ertitech, its owner,
              licensee, affiliates, subsidiaries, group companies (as
              applicable), and their respective officers, directors, agents, and
              employees, from any claim or demand, or actions including
              reasonable attorneys’ fees, made by any third party or penalties
              imposed due to or arising out of the User's breach of these Terms
              of Use, Privacy Policy, and other Policies, or the User's
              violation of any laws, rules, or regulations, or the rights
              (including infringement of intellectual property rights) of a
              third party.
            </p>

            <h5 className="termtext">Force majeure</h5>
            <p className="para">
              A Force Majeure Event shall mean any event that is beyond the
              reasonable control of Ertitech and shall include, but not be
              limited to, acts of war, terrorism, government actions,
              earthquakes, cyclones/hurricanes/typhoons, biological disasters,
              cybersecurity incidents, and other acts of God that prohibit or
              obstruct Ertipay and its affiliates from fulfilling their
              respective obligations under the contract.
            </p>

            <h5 className="termtext">Dispute Management & Grievance Policy</h5>
            <p className="para">
              For inquiries or assistance related to dispute management and
              grievances, please write to us{" "}
              <a href="mailto:hello@ertitech.com">hello@ertitech.com</a>.
            </p>

            <h5 className="termtext">Governing Law & Jurisdiction</h5>
            <p className="para">
              These Terms of Use and any dispute or claim arising under them
              will be governed by and construed in accordance with the laws of
              India. Users agree that any legal action or proceedings arising
              out of these Terms of Use or in connection with them may be
              brought exclusively in the competent courts/tribunals having
              jurisdiction in Chennai, Tamil Nadu, India, and Users irrevocably
              submit themselves to the jurisdiction of such courts/tribunals.
            </p>
          </Col>
        </Row>
      </div>
      <FooterEr />
    </>
  );
}

export default TermsAndConditions;