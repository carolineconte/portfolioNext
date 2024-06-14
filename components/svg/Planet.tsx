import React from 'react'

type Props = {}

const Planet = (props: Props) => {
  return (
    <svg className='' width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.4318 13.1844C40.4208 17.8434 39.7138 22.2034 37.2528 26.2464C35.4368 29.2304 32.9358 31.4704 29.7438 32.9034C23.6138 35.6574 15.8148 34.6924 10.1658 28.7004C9.77283 28.8354 9.34883 28.9764 8.92883 29.1274C6.70483 29.9234 4.46983 30.6764 2.11583 31.0054C1.42483 31.1024 0.716817 31.1924 0.271817 30.5184C-0.166183 29.8544 -0.034173 29.1564 0.378827 28.5094C1.97983 26.0044 3.88382 23.7964 6.54582 22.2324C5.18382 17.7864 5.46282 13.4084 7.64982 9.22642C9.43382 5.81542 12.1288 3.27943 15.6008 1.67143C22.6358 -1.58857 31.2518 -0.271572 36.8548 7.32243C37.0678 7.24043 37.3018 7.15741 37.5288 7.06141C39.4078 6.26841 41.3008 5.50642 43.3498 5.28642C43.9218 5.22542 44.5198 5.22843 45.0838 5.32643C45.8368 5.45843 46.1748 6.00941 45.8358 6.68241C45.4058 7.53841 44.9188 8.42441 44.2478 9.08741C43.0108 10.3114 41.6248 11.3854 40.2968 12.5164C40.0528 12.7254 39.7868 12.9114 39.4318 13.1844ZM9.31082 25.5384C19.1098 21.1934 28.4238 16.0424 37.5108 10.3034C36.3588 8.10641 34.9548 6.27842 32.9208 4.86042C32.4468 5.73842 32.0018 6.52044 31.5948 7.32344C31.0028 8.49144 30.0578 9.21141 28.8308 9.60041C27.8788 9.90141 26.9128 9.78943 25.9458 9.70643C25.0128 9.62643 24.0798 9.53543 23.1448 9.50743C21.8538 9.46843 20.7018 9.90042 19.8238 10.8434C18.8358 11.9054 17.9178 13.0344 16.9978 14.1574C15.9948 15.3814 15.1018 16.7054 14.0178 17.8494C12.8548 19.0764 11.4798 20.0994 9.71382 20.2824C8.93482 20.3634 8.13382 20.2344 7.34182 20.2014C7.29382 21.3534 8.29082 24.1654 9.31082 25.5384ZM6.90582 17.2074C7.35682 17.0904 7.66183 16.9964 7.97183 16.9324C9.53683 16.6134 10.2228 15.5624 10.4038 14.0644C10.4618 13.5874 10.5388 13.1014 10.6928 12.6494C11.3418 10.7514 12.7098 9.87441 14.9378 9.76341C15.9648 9.71241 16.9898 9.54642 18.0038 9.36842C18.7848 9.23142 19.4488 8.83042 19.9878 8.23042C20.4628 7.70142 20.9538 7.18743 21.4468 6.67543C21.9228 6.18043 22.5108 5.91942 23.1948 6.01042C23.7988 6.09042 24.4068 6.20241 24.9858 6.38841C26.0698 6.73641 27.1488 6.77741 28.2308 6.45741C29.6258 6.04541 30.7828 5.29542 31.6168 3.98142C31.2968 3.79542 31.0558 3.64141 30.8028 3.50941C27.5458 1.80941 24.0618 1.20343 20.4638 1.76243C14.0218 2.76243 9.62482 6.31342 7.59082 12.6064C7.12482 14.0554 6.94982 15.5494 6.90582 17.2074ZM44.9608 6.36042C42.1758 6.53042 39.6998 7.17141 37.1148 7.79841C37.3568 8.15941 37.5128 8.39443 37.6648 8.62043C38.5338 8.21943 39.3508 7.83743 40.1708 7.46443C40.8648 7.14843 41.4698 7.26741 42.0668 7.91041C41.8638 8.19541 41.7198 8.54243 41.4608 8.73243C40.6798 9.30543 39.8718 9.84743 39.0408 10.3444C37.5428 11.2404 36.0318 12.1144 34.5058 12.9614C28.8538 16.1004 23.2168 19.2674 17.5248 22.3334C15.2858 23.5394 13.0868 24.8754 10.5898 25.5444C10.3768 25.6014 10.1618 25.7164 9.98982 25.8564C8.92982 26.7254 7.58582 26.9034 6.35882 27.3634C6.18182 27.4294 5.97982 27.4524 5.78882 27.4574C5.05282 27.4764 4.67483 26.8724 5.02783 26.2214C5.14883 25.9994 5.33082 25.8014 5.51582 25.6254C6.07582 25.0944 6.65182 24.5794 7.22882 24.0504C7.12782 23.8044 7.03483 23.5634 6.93083 23.3284C6.89383 23.2454 6.82983 23.1744 6.76683 23.0814C4.58483 24.7224 2.86182 26.7654 1.31482 28.9714C1.22282 29.1034 1.12883 29.2404 1.07083 29.3894C0.888828 29.8554 1.05982 30.1364 1.57582 30.1724C1.89482 30.1944 2.22183 30.1634 2.54083 30.1224C5.05183 29.7964 7.44982 29.0114 9.83882 28.2274C11.2438 27.7664 12.5868 27.1164 13.9568 26.5504C19.4018 24.3034 24.6898 21.7454 29.7768 18.7664C34.2538 16.1444 38.4718 13.1674 42.3918 9.77143C43.4188 8.88543 44.3548 7.91242 44.9608 6.36042ZM38.6928 13.7284C30.1088 19.7914 20.8878 24.3734 11.2278 28.2864C12.8028 30.0394 14.5978 31.2074 16.5738 32.1354C17.0488 32.3584 17.4818 32.3204 17.8498 32.0444C18.5688 31.5044 19.3198 30.9704 19.9118 30.3044C21.0698 29.0024 22.1078 27.5934 23.2378 26.2644C23.8838 25.5044 24.5818 24.7814 25.3108 24.0994C26.6168 22.8784 28.1108 22.5374 29.7688 23.3444C30.9598 23.9234 31.9568 23.5824 32.8678 22.7534C33.3228 22.3394 33.7828 21.9314 34.2168 21.4974C35.2948 20.4204 36.5308 19.7514 38.1098 19.8774C38.3538 19.8974 38.6038 19.8364 38.8608 19.8114C39.2438 17.7924 39.1728 15.8484 38.6928 13.7284ZM38.0528 22.6214C37.5428 22.4094 37.1638 22.7124 36.8298 22.9884C35.6608 23.9574 34.4568 24.8974 33.3798 25.9624C31.7438 27.5794 29.8948 28.6194 27.5448 28.6144C27.3508 28.6144 27.1548 28.6134 26.9628 28.6364C26.2348 28.7254 25.5748 28.9664 25.1138 29.5744C24.4018 30.5134 23.8908 31.5544 23.6248 32.7044C23.5788 32.9034 23.6178 33.1224 23.6178 33.3314C29.8358 33.4384 36.3798 28.4064 38.0528 22.6214ZM40.3478 8.45143C40.3238 8.36643 40.2998 8.28142 40.2758 8.19642C39.4608 8.40042 38.6458 8.60541 37.7358 8.83341C37.9618 9.23841 38.1078 9.50042 38.2828 9.81242C39.0228 9.32542 39.6858 8.88843 40.3478 8.45143ZM7.50082 24.6654C6.94482 25.2784 6.47182 25.7994 5.99882 26.3204C6.04182 26.3824 6.08483 26.4434 6.12683 26.5054C6.77483 26.3034 7.42382 26.1014 8.11982 25.8834C7.91382 25.4754 7.75582 25.1654 7.50082 24.6654Z" fill="#3C565B"/>
    </svg>
    
  )
}

export default Planet