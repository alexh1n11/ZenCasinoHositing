import React from 'react';
import styles from './RegisterPopUp.module.css';

const RegisterPopUp = ({registerClicked, setRegisterClicked, loginClicked, setLoginClicked }) => {
    const toggleRegisterClicked = () => {
        setRegisterClicked(false);
    };
    const toggleChangeRegLog = () => {
        setRegisterClicked(false);
        setLoginClicked(true);
        
    }
  return (
    <div className={styles.popUpOverlay}>
        <div className={styles.registerPopUp}>
            <div className={styles.imgContainer}></div>
            <div className={styles.content}>
                <button className={styles.exitButton} onClick={toggleRegisterClicked} style={{position: 'absolute', top: '20px', right: '20px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M0.33546 0.33546C0.550319 0.120665 0.841693 0 1.1455 0C1.44932 0 1.74069 0.120665 1.95555 0.33546L6.00692 4.38683L10.0583 0.33546C10.2744 0.126752 10.5638 0.0112672 10.8642 0.0138777C11.1646 0.0164882 11.452 0.136985 11.6644 0.349417C11.8768 0.561848 11.9973 0.849216 12 1.14963C12.0026 1.45004 11.8871 1.73946 11.6784 1.95555L7.62701 6.00692L11.6784 10.0583C11.8871 10.2744 12.0026 10.5638 12 10.8642C11.9973 11.1646 11.8768 11.452 11.6644 11.6644C11.452 11.8768 11.1646 11.9973 10.8642 12C10.5638 12.0026 10.2744 11.8871 10.0583 11.6784L6.00692 7.62701L1.95555 11.6784C1.73946 11.8871 1.45004 12.0026 1.14963 12C0.849216 11.9973 0.561848 11.8768 0.349417 11.6644C0.136985 11.452 0.0164882 11.1646 0.0138777 10.8642C0.0112672 10.5638 0.126752 10.2744 0.33546 10.0583L4.38683 6.00692L0.33546 1.95555C0.120665 1.74069 0 1.44932 0 1.1455C0 0.841693 0.120665 0.550319 0.33546 0.33546Z" fill="#576081"/>
                    </svg>
                </button>
                <div className={styles.title}>
                    <p className={styles.title1}>Create an account</p>
                    <p className={styles.title2}>Already have an account? <span className={styles.title3} onClick={toggleChangeRegLog} style={{cursor: 'pointer'}}>Log In</span></p>
                </div>
                <div className={styles.entryContainer}>
                    <input type="text" id="email" name="email" placeholder="Email" className={styles.inputData}/>
                    <input type="text" id="password" name="password" placeholder="Password" className={styles.inputData}/>
                    <div className={styles.country}>
                        <div style={{display: 'flex', color: '#F5F8FF', gap: '12px', alignItems: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.042899 9.03573C0.0143276 9.1143 0 9.2 0 9.28571C0 9.35 0.00715681 9.40715 0.0142997 9.47144C0.00715681 9.64286 0 9.82143 0 10C0 15.5214 4.47857 20 10 20C15.5214 20 20 15.5214 20 10C20 9.82143 19.9928 9.64286 19.9857 9.47144C19.9928 9.40715 20 9.35 20 9.28571C20 9.2 19.9857 9.1143 19.9571 9.03573C19.4642 3.9643 15.2 0 10 0C4.8 0 0.535756 3.9643 0.042899 9.03573ZM10 1.42857C9.26429 1.42857 8.37146 2.10713 7.62146 3.7357C6.89289 5.29999 6.42857 7.51429 6.42857 10C6.42857 10.1857 6.42858 10.3643 6.43572 10.55C7.52144 10.6572 8.72857 10.7143 10 10.7143C11.2714 10.7143 12.4786 10.6572 13.5643 10.55C13.5714 10.3643 13.5714 10.1857 13.5714 10C13.5714 7.51429 13.1071 5.29999 12.3785 3.7357C11.6285 2.10713 10.7357 1.42857 10 1.42857ZM13.4714 11.9929C12.3928 12.0929 11.2214 12.1429 10 12.1429C8.77857 12.1429 7.60715 12.0929 6.52858 11.9929C6.70715 13.6572 7.09289 15.1357 7.62146 16.2643C8.37146 17.8929 9.26429 18.5714 10 18.5714C10.7357 18.5714 11.6285 17.8929 12.3785 16.2643C12.9071 15.1357 13.2928 13.6572 13.4714 11.9929ZM5 10.3714C5 10.25 5 10.1214 5 10C5 7.35714 5.49284 4.92858 6.32141 3.13572C6.50713 2.72858 6.72142 2.34288 6.95714 1.98574C3.94285 3.12859 1.74289 5.92855 1.45717 9.26427C1.51431 9.32141 1.61429 9.40003 1.78571 9.49289C2.17143 9.70717 2.77859 9.9143 3.59288 10.1072C4.02145 10.2 4.49286 10.2929 5 10.3714ZM1.47853 10.9286C1.97853 11.15 2.59283 11.3357 3.2714 11.5C3.8214 11.6214 4.42142 11.7357 5.07856 11.8215C5.24999 13.75 5.6857 15.4928 6.32141 16.8643C6.50713 17.2714 6.72142 17.6571 6.95714 18.0143C3.99999 16.8928 1.82853 14.1857 1.47853 10.9286ZM18.5428 9.26427C18.2571 5.92855 16.0571 3.12859 13.0429 1.98574C13.2786 2.34288 13.4929 2.72858 13.6786 3.13572C14.5072 4.92858 15 7.35714 15 10C15 10.1214 15 10.25 15 10.3714C15.5071 10.2929 15.9786 10.2 16.4071 10.1072C17.2214 9.9143 17.8286 9.70717 18.2143 9.49289C18.3857 9.40003 18.4857 9.32141 18.5428 9.26427ZM18.5215 10.9286C18.0215 11.15 17.4072 11.3357 16.7286 11.5C16.1786 11.6214 15.5786 11.7357 14.9214 11.8215C14.75 13.75 14.3143 15.4928 13.6786 16.8643C13.4929 17.2714 13.2786 17.6571 13.0429 18.0143C16 16.8928 18.1715 14.1857 18.5215 10.9286Z" fill="white"/>
                            </svg>
                            <p>Country</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="#576081" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <input type="text" id="promo" name="promo" placeholder="Promo Code (if available)" className={styles.inputData}/>
                    <div className={styles.terms}>
                        <div className={styles.checker}></div>
                        <p>I am 18 years old and I have read and accept <span className={styles.terms1}>Terms and Conditions</span> and <span className={styles.terms1}>Privacy Policy.</span></p>
                    </div>
                </div>
                <div className={styles.regButton}>Register</div>
                <div className={styles.continueWidth}>
                    
                    <div className={styles.sepOr}>
                        <div style={{width: '170px', height: '1px', background: '#1B2231'}}></div>
                        OR
                        <div style={{width: '170px', height: '1px', background: '#1B2231'}}></div>
                    </div>

                    Continue with

                    <div className={styles.signInRow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <rect width="44" height="44" rx="12" fill="#22283E"/>
                            <path d="M13.2568 21.6163C15.0067 20.6538 16.9692 19.8413 18.7941 19.0288C21.944 17.7038 25.0939 16.3913 28.2938 15.1788C28.9188 14.9663 30.0313 14.7663 30.1438 15.6913C30.0813 16.9913 29.8438 18.2913 29.6688 19.5788C29.2438 22.4288 28.7438 25.2663 28.2563 28.1038C28.0938 29.0538 26.9064 29.5413 26.1439 28.9288C24.3189 27.7038 22.494 26.4788 20.6941 25.2288C20.1066 24.6288 20.6566 23.7663 21.1815 23.3413C22.6815 21.8663 24.2689 20.6038 25.6939 19.0538C26.0814 18.1288 24.9439 18.9038 24.5689 19.1413C22.519 20.5538 20.5191 22.0538 18.3441 23.3038C17.2442 23.9163 15.9442 23.3913 14.8442 23.0538C13.8568 22.6538 12.4068 22.2413 13.2568 21.6163Z" fill="#576081"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <rect width="44" height="44" rx="12" fill="#22283E"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M31.0992 25.5527V19.1054C31.0992 19.1054 31.0992 16 27.9644 16H16.1053C16.1053 16 13 16 13 19.1054V25.5527C13 25.5527 13 28.658 16.1053 28.658H27.9644C27.9644 28.658 31.0992 28.658 31.0992 25.5527ZM25.5393 22.329L19.6246 25.7893V18.8392L25.5393 22.329Z" fill="#576081"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <rect width="44" height="44" rx="12" fill="#22283E"/>
                            <path d="M30.4135 16.5675C29.822 16.8336 29.1714 17.0111 28.4912 17.0998C29.201 16.6858 29.7333 16.0351 29.9699 15.2366C29.3193 15.6211 28.6095 15.9168 27.8406 16.0647C27.2195 15.414 26.3619 15 25.386 15C23.2271 15 21.6301 17.0407 22.1032 19.1405C19.2937 18.9926 16.8391 17.6617 15.1534 15.6211C14.2662 17.1294 14.7098 19.1109 16.1885 20.1165C15.6266 20.0869 15.1238 19.939 14.6506 19.7024C14.6211 21.2699 15.7449 22.719 17.3419 23.0444C16.8687 23.1627 16.3363 23.1922 15.8336 23.1035C16.2476 24.4344 17.4897 25.4104 18.9684 25.4399C17.5489 26.5638 15.7744 27.037 14 26.8299C15.4787 27.7763 17.2531 28.3383 19.1459 28.3383C25.386 28.3383 28.9348 23.0739 28.6982 18.342C29.3784 17.8392 29.9403 17.2477 30.4135 16.5675Z" fill="#576081"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <rect width="44" height="44" rx="12" fill="#22283E"/>
                            <path d="M25.5042 15.5379C27.7223 15.6266 28.7574 16.6913 28.8757 18.9094C28.9052 19.7671 28.9348 20.0333 28.9348 22.2218C28.9348 24.4104 28.9348 24.6765 28.8757 25.5342C28.787 27.7523 27.7519 28.7874 25.5042 28.9057C24.6466 28.9353 24.3804 28.9649 22.192 28.9649C20.0035 28.9649 19.7373 28.9649 18.8797 28.9057C16.6617 28.817 15.6266 27.7523 15.5083 25.5342C15.4787 24.6765 15.4491 24.4104 15.4491 22.2218C15.4491 20.0333 15.4491 19.7671 15.5083 18.9094C15.597 16.6913 16.6321 15.6562 18.8797 15.5379C19.7373 15.5083 20.0035 15.4787 22.192 15.4787C24.3804 15.4787 24.6466 15.4787 25.5042 15.5379ZM22.192 14C19.9739 14 19.6782 14 18.8205 14.0591C15.8336 14.207 14.1774 15.8336 14.0591 18.8207C14.0296 19.7079 14 19.9741 14 22.1922C14 24.4103 14 24.7061 14.0591 25.5638C14.207 28.5508 15.8336 30.207 18.8205 30.3253C19.7078 30.3549 19.9739 30.3845 22.192 30.3845C24.41 30.3845 24.7057 30.3845 25.5634 30.3253C28.5504 30.1774 30.2065 28.5508 30.3248 25.5638C30.3544 24.6765 30.3839 24.4103 30.3839 22.1922C30.3839 19.9741 30.3839 19.6784 30.3248 18.8207C30.1769 15.8336 28.5504 14.1774 25.5634 14.0591C24.7057 14 24.41 14 22.192 14ZM22.192 17.9926C19.8556 17.9926 17.9925 19.8854 17.9925 22.1922C17.9925 24.5286 19.8852 26.3919 22.192 26.3919C24.5283 26.3919 26.3915 24.4991 26.3915 22.1922C26.3915 19.8854 24.4987 17.9926 22.192 17.9926ZM22.192 24.9427C20.6837 24.9427 19.4712 23.7301 19.4712 22.2218C19.4712 20.7135 20.6837 19.5009 22.192 19.5009C23.7002 19.5009 24.9128 20.7135 24.9128 22.2218C24.9128 23.7006 23.7002 24.9427 22.192 24.9427ZM26.5689 16.8392C26.0366 16.8392 25.593 17.2828 25.593 17.8152C25.593 18.3475 26.0366 18.7911 26.5689 18.7911C27.1012 18.7911 27.5448 18.3475 27.5448 17.8152C27.5448 17.2828 27.1012 16.8392 26.5689 16.8392Z" fill="#576081"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <rect width="44" height="44" rx="12" fill="#22283E"/>
                            <path d="M23.3197 31V22.499H25.6864L26 19.5695H23.3197L23.3237 18.1033C23.3237 17.3392 23.3969 16.9298 24.5037 16.9298H25.9832V14H23.6162C20.773 14 19.7723 15.4211 19.7723 17.811V19.5698H18V22.4993H19.7723V31H23.3197Z" fill="#576081"/>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RegisterPopUp;
