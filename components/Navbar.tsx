import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";
import Logo from "../images/Logo.svg";
import { useState } from "react";

const Navbar: NextComponentType = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <>
      <header className="sticky w-full shadow-[0px_1px_4px_0px_#2B28660D] backdrop-filter backdrop-blur-[6px] top-0 z-50 bg-white/[.9]">
        <div className="innerDiv 2xl:px-[0!important] xl:px-[80px!important] lg:px-[20px!important] md:px-[30px!important] !px-0">
          <nav className="md:flex items-center">
            <div className="flex items-center justify-between md:px-0 px-5">
              <Link href={"/"} passHref>
                <a className="inline-block py-[19px] logo">
                  <svg
                    width="153"
                    height="26"
                    viewBox="0 0 153 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_9476_995"
                      maskUnits="userSpaceOnUse"
                      x="17"
                      y="20"
                      width="5"
                      height="6"
                    >
                      <path
                        d="M17.0474 20.3094H21.0396V25.5H17.0474V20.3094Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_9476_995)">
                      <path
                        d="M19.1252 20.4774C19.0232 20.86 18.2843 21.4718 17.2646 22.0584L17.6209 22.7206L19.1252 25.4244L20.6307 22.7206L20.9869 22.0584C19.9673 21.4718 19.2272 20.86 19.1252 20.4774Z"
                        fill="#6962FB"
                      />
                    </g>
                    <mask
                      id="mask1_9476_995"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="1"
                      width="39"
                      height="21"
                    >
                      <path d="M0 1.5H38.1718V21.5378H0V1.5Z" fill="white" />
                    </mask>
                    <g mask="url(#mask1_9476_995)">
                      <path
                        d="M38.1742 1.52999L19.1249 7.26758L0.0767731 1.52999C0.0251911 1.70873 0 1.88747 0 2.03981C0 2.80514 0.509822 3.54529 1.27515 3.77441L2.21922 4.05511L13.8719 7.57348C16.4738 8.364 18.1568 10.7356 18.2072 13.3111C18.2072 13.3626 18.2072 13.413 18.2072 13.4898C18.2072 14.4843 17.9529 15.4787 17.4167 16.448C16.0912 18.7943 13.3117 20.0179 10.7099 19.3809C8.97646 18.9719 7.54776 17.8755 6.70685 16.3208C5.94152 14.8921 5.76278 13.2343 6.24741 11.6796C6.37577 11.297 6.52812 10.9143 6.70685 10.5568C4.79472 11.9603 4.20813 15.0205 4.94707 16.8306C5.20258 17.3656 5.50847 17.8755 5.89114 18.3601C6.55331 19.2274 7.4206 19.9411 8.41505 20.451C9.61344 21.064 10.8634 21.3698 12.1134 21.3698C15.0199 21.3698 17.7478 19.7372 19.1249 17.1113C20.502 19.7372 23.2311 21.3698 26.1377 21.3698C27.3624 21.3698 28.6112 21.0891 29.8096 20.451C30.7788 19.9411 31.6461 19.2274 32.3347 18.3601C32.7174 17.8755 33.0232 17.3656 33.2776 16.8306C34.0177 14.9941 33.4311 11.9603 31.519 10.5568C31.7229 10.9143 31.8752 11.297 31.9772 11.6796C32.4618 13.2343 32.2831 14.8921 31.519 16.3208C30.6769 17.8755 29.2494 18.9719 27.5148 19.3809C24.8889 19.9927 22.1347 18.768 20.8079 16.448C20.2477 15.4787 20.0174 14.4591 20.0174 13.4898C20.0174 13.4394 20.0174 13.3878 20.0174 13.3111C20.069 10.7356 21.752 8.364 24.3527 7.57348L36.0066 4.05511L36.9759 3.77441C37.7664 3.54529 38.251 2.83034 38.251 2.03981C38.251 1.86227 38.2246 1.70873 38.1742 1.52999Z"
                        fill="#6962FB"
                      />
                    </g>
                    <path
                      d="M26.1374 15.7342C24.8623 15.7342 23.8426 14.7134 23.8426 13.4394C23.8426 12.1643 24.8623 11.1434 26.1374 11.1434C26.3929 11.1434 26.6736 11.195 26.9028 11.2718C26.5201 11.3989 26.2394 11.7564 26.2394 12.1895C26.2394 12.7245 26.6736 13.1587 27.2087 13.1587C27.6933 13.1587 28.1011 12.8013 28.1527 12.3418C28.3303 12.6741 28.4322 13.0568 28.4322 13.4646C28.4322 14.7134 27.4126 15.7342 26.1374 15.7342ZM24.9391 9.07775C22.6443 9.76631 21.1904 12.1127 21.7266 14.4339C22.2112 16.5499 24.0982 17.9271 26.1122 17.9271C26.5453 17.9271 26.9795 17.8755 27.4126 17.7231C28.5606 17.3657 29.5035 16.6003 30.0901 15.5303C30.6515 14.4591 30.7786 13.2607 30.4223 12.0875C30.1416 11.1434 29.555 10.3277 28.7645 9.76631L30.5495 9.2313L32.4364 8.6699L33.4813 8.364C34.2718 8.13488 34.7564 7.42113 34.7564 6.63061C34.7564 6.45187 34.7312 6.27314 34.6808 6.0944L24.9391 9.07775Z"
                      fill="#6962FB"
                    />
                    <path
                      d="M12.1134 11.1434C12.3677 11.1434 12.6484 11.195 12.8776 11.2718C12.4949 11.3989 12.2154 11.7564 12.2154 12.1895C12.2154 12.7245 12.6484 13.1587 13.1835 13.1587C13.6681 13.1587 14.0759 12.8012 14.1275 12.3418C14.3063 12.6741 14.4082 13.0568 14.4082 13.4646C14.4082 14.7398 13.3874 15.7594 12.1134 15.7594C10.8383 15.7594 9.81744 14.7398 9.81744 13.4646C9.81744 12.1643 10.8383 11.1434 12.1134 11.1434ZM5.76286 8.69629L7.6498 9.25649L9.43477 9.7927C8.64425 10.3529 8.08405 11.1698 7.77815 12.1127C7.42068 13.2607 7.54783 14.4843 8.10924 15.5555C8.67064 16.6267 9.6399 17.3908 10.7867 17.7483C11.2197 17.8755 11.654 17.9522 12.087 17.9522C14.1275 17.9522 15.9893 16.5751 16.4739 14.4591C17.0089 12.1127 15.555 9.7927 13.2602 9.10414L3.51964 6.12079C3.46806 6.29833 3.44287 6.47706 3.44287 6.6558C3.44287 7.42113 3.95269 8.16007 4.71802 8.39039L5.76286 8.69629Z"
                      fill="#6962FB"
                    />
                    <path
                      d="M51.2403 21.7461C50.4278 21.7461 49.6934 21.5703 49.0372 21.2188C48.3887 20.8672 47.8731 20.332 47.4903 19.6133H47.4669V21.5H44.5606V4.03906H47.5137V10.8828H47.5372C47.9356 10.2031 48.4552 9.69922 49.0958 9.37109C49.7364 9.04297 50.4552 8.87891 51.252 8.87891C52.3145 8.87891 53.2442 9.15234 54.0411 9.69922C54.8458 10.2383 55.4708 10.9922 55.9161 11.9609C56.3692 12.9219 56.5958 14.0352 56.5958 15.3008C56.5958 16.5898 56.3731 17.7188 55.9278 18.6875C55.4903 19.6484 54.8692 20.3984 54.0645 20.9375C53.2598 21.4766 52.3184 21.7461 51.2403 21.7461ZM50.5489 19.2734C51.463 19.2734 52.2012 18.9336 52.7637 18.2539C53.3262 17.5664 53.6075 16.582 53.6075 15.3008C53.6075 14.0273 53.3262 13.0469 52.7637 12.3594C52.2012 11.6719 51.463 11.3281 50.5489 11.3281C49.5802 11.3281 48.8028 11.6914 48.2169 12.418C47.6387 13.1367 47.3497 14.0977 47.3497 15.3008C47.3497 16.5039 47.6387 17.4688 48.2169 18.1953C48.8028 18.9141 49.5802 19.2734 50.5489 19.2734ZM58.1666 21.5V9.125H61.0142V11.1758H61.0494C61.2759 10.4727 61.6314 9.9375 62.1158 9.57031C62.608 9.19531 63.2525 9.00781 64.0494 9.00781C64.2525 9.00781 64.4322 9.01562 64.5884 9.03125C64.7525 9.03906 64.8931 9.04688 65.0103 9.05469V11.6797C64.9009 11.6641 64.7134 11.6445 64.4478 11.6211C64.1822 11.5977 63.9048 11.5859 63.6158 11.5859C62.9127 11.5859 62.3189 11.8281 61.8345 12.3125C61.358 12.7969 61.1197 13.5234 61.1197 14.4922V21.5H58.1666ZM69.7803 21.6992C68.5459 21.6992 67.5225 21.3906 66.71 20.7734C65.9053 20.1484 65.503 19.2188 65.503 17.9844C65.503 17.0469 65.7295 16.3242 66.1827 15.8164C66.6436 15.3008 67.2412 14.9258 67.9756 14.6914C68.7178 14.457 69.5147 14.2969 70.3662 14.2109C71.5147 14.0781 72.3155 13.9609 72.7686 13.8594C73.2217 13.7578 73.4483 13.4961 73.4483 13.0742V12.9805C73.4483 12.4492 73.2452 12.0156 72.8389 11.6797C72.4405 11.3438 71.8897 11.1758 71.1866 11.1758C70.4678 11.1758 69.8819 11.3438 69.4287 11.6797C68.9834 12.0156 68.7412 12.4453 68.7022 12.9688H65.8545C65.9248 11.7422 66.4366 10.7539 67.3897 10.0039C68.3428 9.25391 69.628 8.87891 71.2452 8.87891C72.8545 8.87891 74.1123 9.25391 75.0186 10.0039C75.9248 10.7539 76.378 11.7734 76.378 13.0625V21.5H73.4717V19.7539H73.4248C73.128 20.3008 72.6983 20.7617 72.1358 21.1367C71.5733 21.5117 70.7881 21.6992 69.7803 21.6992ZM70.5069 19.5078C71.4756 19.5078 72.21 19.2578 72.71 18.7578C73.21 18.25 73.46 17.6367 73.46 16.918V15.582C73.2803 15.6992 72.9327 15.8086 72.417 15.9102C71.9014 16.0039 71.3389 16.0977 70.7295 16.1914C70.0967 16.2852 69.5459 16.4648 69.0772 16.7305C68.6162 16.9883 68.3858 17.3984 68.3858 17.9609C68.3858 18.4453 68.5772 18.8242 68.96 19.0977C69.3428 19.3711 69.8584 19.5078 70.5069 19.5078ZM81.4644 14.5039V21.5H78.5112V9.125H81.4175V11.0234C82.2769 9.59375 83.5425 8.87891 85.2144 8.87891C86.5112 8.87891 87.5698 9.29688 88.3902 10.1328C89.2183 10.9688 89.6323 12.1797 89.6323 13.7656V21.5H86.6675V14.2344C86.6675 13.3281 86.4487 12.6406 86.0112 12.1719C85.5737 11.7031 84.9605 11.4688 84.1714 11.4688C83.398 11.4688 82.7534 11.7109 82.2378 12.1953C81.7222 12.6797 81.4644 13.4492 81.4644 14.5039ZM96.5703 21.7461C95.4922 21.7461 94.5508 21.4766 93.7461 20.9375C92.9414 20.3984 92.3164 19.6484 91.8711 18.6875C91.4336 17.7188 91.2148 16.5898 91.2148 15.3008C91.2148 14.0352 91.4375 12.9219 91.8828 11.9609C92.3281 10.9922 92.9531 10.2383 93.7578 9.69922C94.5625 9.15234 95.4922 8.87891 96.5469 8.87891C97.3516 8.87891 98.0742 9.04297 98.7148 9.37109C99.3555 9.69922 99.875 10.2031 100.273 10.8828H100.297V4.03906H103.25V21.5H100.344V19.6133H100.32C99.9297 20.332 99.4062 20.8672 98.75 21.2188C98.1016 21.5703 97.375 21.7461 96.5703 21.7461ZM97.2617 19.2734C98.2305 19.2734 99.0039 18.9141 99.582 18.1953C100.168 17.4688 100.461 16.5039 100.461 15.3008C100.461 14.0977 100.168 13.1367 99.582 12.418C99.0039 11.6914 98.2305 11.3281 97.2617 11.3281C96.3477 11.3281 95.6094 11.6719 95.0469 12.3594C94.4844 13.0469 94.2031 14.0273 94.2031 15.3008C94.2031 16.582 94.4844 17.5664 95.0469 18.2539C95.6094 18.9336 96.3477 19.2734 97.2617 19.2734ZM108.114 21.5L104.293 9.125H107.399L108.676 13.8242C108.872 14.5586 109.059 15.3164 109.239 16.0977C109.418 16.8789 109.602 17.6523 109.79 18.418C109.977 17.6523 110.168 16.8789 110.364 16.0977C110.559 15.3164 110.758 14.5586 110.961 13.8242L112.274 9.125H115.004L116.305 13.8242C116.5 14.5586 116.692 15.3125 116.879 16.0859C117.075 16.8594 117.27 17.6289 117.465 18.3945C117.645 17.6289 117.825 16.8594 118.004 16.0859C118.184 15.3125 118.372 14.5586 118.567 13.8242L119.844 9.125H122.985L119.153 21.5H116.082L114.582 16.3438C114.418 15.7734 114.258 15.1875 114.102 14.5859C113.946 13.9844 113.79 13.3828 113.633 12.7812C113.485 13.3828 113.332 13.9844 113.176 14.5859C113.02 15.1875 112.856 15.7734 112.684 16.3438L111.161 21.5H108.114ZM124.04 21.5V9.125H126.993V21.5H124.04ZM125.517 7.28516C125.009 7.28516 124.587 7.125 124.251 6.80469C123.915 6.47656 123.747 6.07422 123.747 5.59766C123.747 5.12109 123.915 4.72266 124.251 4.40234C124.587 4.08203 125.009 3.92188 125.517 3.92188C126.017 3.92188 126.435 4.08203 126.77 4.40234C127.106 4.72266 127.274 5.12109 127.274 5.59766C127.274 6.07422 127.106 6.47656 126.77 6.80469C126.435 7.125 126.017 7.28516 125.517 7.28516ZM133.99 21.793C132.482 21.793 131.22 21.4414 130.205 20.7383C129.197 20.0273 128.646 19.0078 128.552 17.6797H131.47C131.533 18.2812 131.775 18.75 132.197 19.0859C132.619 19.4141 133.201 19.5781 133.943 19.5781C134.654 19.5781 135.212 19.4375 135.619 19.1562C136.033 18.875 136.24 18.5156 136.24 18.0781C136.24 17.7031 136.087 17.4023 135.783 17.1758C135.478 16.9492 135.068 16.7812 134.552 16.6719L132.443 16.2383C130.037 15.7383 128.833 14.5469 128.833 12.6641C128.833 11.5234 129.287 10.6055 130.193 9.91016C131.099 9.20703 132.306 8.85547 133.814 8.85547C135.314 8.85547 136.533 9.22656 137.47 9.96875C138.415 10.7031 138.904 11.707 138.935 12.9805H136.158C136.142 12.4258 135.927 11.9688 135.513 11.6094C135.099 11.25 134.556 11.0703 133.884 11.0703C133.236 11.0703 132.724 11.2148 132.349 11.5039C131.974 11.793 131.787 12.1484 131.787 12.5703C131.787 12.9375 131.931 13.2383 132.22 13.4727C132.509 13.6992 132.912 13.8711 133.427 13.9883L135.654 14.4453C136.88 14.7031 137.783 15.1094 138.361 15.6641C138.947 16.2188 139.24 16.9492 139.24 17.8555C139.24 18.6602 139.013 19.3594 138.56 19.9531C138.115 20.5391 137.497 20.9922 136.708 21.3125C135.919 21.6328 135.013 21.793 133.99 21.793ZM146.236 21.7812C145.002 21.7812 143.932 21.5039 143.025 20.9492C142.119 20.3945 141.42 19.6328 140.928 18.6641C140.443 17.6875 140.201 16.5742 140.201 15.3242C140.201 14.0664 140.451 12.9531 140.951 11.9844C141.459 11.0078 142.158 10.2422 143.049 9.6875C143.939 9.125 144.963 8.84375 146.119 8.84375C147.307 8.84375 148.346 9.11719 149.236 9.66406C150.127 10.2109 150.818 10.9688 151.31 11.9375C151.803 12.8984 152.049 14.0117 152.049 15.2773V16.0859H143.096C143.135 17.0938 143.432 17.9062 143.986 18.5234C144.541 19.1406 145.314 19.4492 146.307 19.4492C147.049 19.4492 147.662 19.2891 148.146 18.9688C148.631 18.6406 148.959 18.2109 149.131 17.6797H151.896C151.74 18.4844 151.396 19.1953 150.865 19.8125C150.342 20.4297 149.682 20.9141 148.885 21.2656C148.088 21.6094 147.205 21.7812 146.236 21.7812ZM143.119 14.0469H149.213C149.119 13.1641 148.799 12.4688 148.252 11.9609C147.713 11.4453 147.018 11.1875 146.166 11.1875C145.307 11.1875 144.607 11.4453 144.068 11.9609C143.537 12.4688 143.221 13.1641 143.119 14.0469Z"
                      fill="#6962FB"
                    />
                  </svg>
                </a>
              </Link>
              <div className="md:hidden block ml-auto">
                <Link href={"#"} passHref>
                  <a className="inline-block text-[14px] font-[400] leading-[20px] tracking-[-0.006em] text-white py-[6px] px-[10px] theme-btn rounded-lg trial-mobile-btn">
                    Start Free Trial
                  </a>
                </Link>
              </div>
              <button
                onClick={handleToggle}
                type="button"
                className="md:hidden block bg-white [box-shadow:0px_0px_0px_1px_#E1E4EA,_0px_1px_3px_0px_rgba(14,18,27,0.12)] rounded-lg p-[6px] ml-4 toggle-btn"
              >
                {navOpen ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5L5 15M5 5L15 15"
                      stroke="#475467"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33301 5H16.6663M3.33301 10H16.6663M3.33301 15H16.6663"
                      stroke="#475467"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={
                "md:items-center w-full md:flex-row flex-col md:bg-transparent bg-white md:px-0 px-5 border border-[#E4E7EC] md:shadow-none [box-shadow:0px_4px_6px_-2px_rgba(16,24,40,.03),_0px_12px_16px_-4px_rgba(16,24,40,.08)] md:border-0 " +
                (navOpen ? " flex" : " md:flex hidden")
              }
            >
              <ul className="md:flex md:mx-auto gap-x-7">
                <li>
                  <Link href={"#"} passHref>
                    <a className="inline-flex items-center md:py-[22px] py-4 text-[#475467] text-[14px] font-[400] leading-[20px] tracking-[-0.006em]">
                      Product{" "}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-[rgba(71,84,103,1)]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg> */}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/pricing"} passHref>
                    <a className="inline-block md:py-[22px] py-4 text-[#475467] text-[14px] font-[400] leading-[20px] tracking-[-0.006em]">
                      Pricing
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"} passHref>
                    <a className="inline-block md:py-[22px] py-4 text-[#475467] text-[14px] font-[400] leading-[20px] tracking-[-0.006em]">
                      Roadmap
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"} passHref>
                    <a className="inline-flex items-center md:py-[22px] py-4 text-[#475467] text-[14px] font-[400] leading-[20px] tracking-[-0.006em]">
                      Resources{" "}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-[rgba(71,84,103,1)]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg> */}
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="flex gap-4">
                <li>
                  <Link href={"#"} passHref>
                    <a className="inline-block md:px-[10px] md:py-[6px] py-4 md:rounded-lg text-[#475467] text-[14px] font-[400] leading-[20px] tracking-[-0.006em] md:[box-shadow:0px_0px_0px_1px_#E1E4EA,_0px_1px_3px_0px_#0E121B1F] md:bg-white">
                      Log In
                    </a>
                  </Link>
                </li>
                <li className="md:block hidden">
                  <Link href={"#"} passHref>
                    <a className="theme-btn inline-block text-[14px] font-[400] leading-[20px] tracking-[-0.006em] text-white py-[6px] px-[10px] theme-btn rounded-lg">
                      Start Free Trial
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
