import React from 'react'

type Props = {}

const Balao = (props: Props) => {
  return (
    <svg width="62" height="57" viewBox="0 0 62 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M61.4225 37.4985C62.2795 34.735 62.0541 31.9746 61.597 29.1196C60.9097 25.5037 58.7525 22.1776 57.3304 18.7066C56.9843 17.8983 56.7161 16.8994 56.1376 16.3299C53.3599 13.8625 51.3568 10.8216 48.4244 8.40228C44.7975 5.36612 40.4707 4.04574 36.2216 2.53473C35.5264 2.25112 34.6758 2.34884 33.8639 2.3512C32.7838 1.35464 31.4687 1.59647 30.3093 1.45702C29.4212 0.983551 28.6093 0.985879 27.8355 1.22615C24.7825 0.758964 21.8064 0.434358 19.0589 1.53724L18.9042 1.58531C18.209 1.3017 17.5511 1.58922 16.932 1.78143C8.34276 4.61503 3.45819 10.2942 1.6996 18.2492C1.58294 18.5352 1.58206 18.8684 1.69714 19.2489C0.80433 20.7748 1.14798 22.5828 0.989276 24.297C0.948806 25.0588 0.947333 25.7253 1.60286 26.4375C1.64096 26.6754 1.75593 27.0559 1.79403 27.2938C1.90752 28.3407 2.0211 29.3878 2.13459 30.4347C2.28777 31.0531 2.75037 31.5754 3.32971 31.8117C3.21226 32.4309 3.67493 32.9533 3.98286 33.5236C3.74954 34.0956 4.09638 34.5706 4.63684 34.9023C4.51939 35.5215 4.90509 35.9012 5.44555 36.2328C5.09557 37.0907 6.02254 37.4689 6.67886 37.8478C6.83283 38.133 7.02565 38.3229 7.17961 38.608C6.83043 39.1327 7.1773 39.6078 7.71775 39.9394C7.563 39.9875 7.60109 40.2254 7.56221 40.3207C7.36699 41.1306 7.17168 41.9404 6.97646 42.7502C6.78202 43.2268 6.74246 43.6554 6.54803 44.132C5.89013 44.4195 5.81145 44.9434 5.84875 45.5145C5.42259 45.8966 5.11236 46.326 5.53616 46.9436C5.45522 48.4672 4.02194 49.6615 4.55923 51.3261C4.32591 51.898 4.05371 52.5652 3.82039 53.1372C3.70057 54.7561 5.12993 55.228 6.48146 55.8905C6.71319 55.9851 6.82906 56.0323 7.0608 56.1269C8.5655 57.4078 9.76612 56.4522 11.0042 56.0678C12.0097 55.922 12.9771 55.5384 13.8287 55.1075C16.5381 53.7667 19.2086 52.5213 22.0339 51.2277C23.0791 50.6535 24.1615 50.6503 25.5908 51.1222C28.7589 51.9699 31.7334 52.9609 35.0578 53.0941C42.2091 53.4542 48.3986 51.8653 53.6261 48.3274C57.7687 45.7923 59.9043 41.8826 61.4225 37.4985ZM26.6714 3.08614C26.3619 3.18225 26.1682 3.32561 26.0904 3.51625C25.9349 3.89754 26.2047 4.22997 26.4356 4.65774C26.0888 4.1827 25.9349 3.89754 26.0904 3.51625C26.2841 3.37288 26.4778 3.22952 26.6714 3.08614ZM4.4948 29.6186C4.72654 29.7131 4.8424 29.7604 5.07414 29.8549C4.88129 29.6651 4.61067 29.6659 4.4948 29.6186ZM54.1871 39.995C51.2 44.3357 46.9406 47.1566 41.0615 48.3162C38.2767 48.848 35.4158 48.9039 32.4778 48.8172C29.6557 48.7778 27.0297 47.5953 24.4028 46.7461C22.1235 46.0386 20.4219 46.2339 18.7188 47.0957C16.3578 48.2451 13.9969 49.3945 11.597 50.6392C11.2486 50.8306 10.8614 51.1174 9.97332 50.6439C10.7122 48.8328 11.2581 46.8318 12.3446 45.1625C13.8191 42.8732 13.3215 40.7801 11.4708 38.6908C11.0081 38.1685 10.816 37.6454 10.1597 37.2665C9.92954 36.5055 9.31212 36.0312 8.73357 35.4617C8.8899 34.7472 9.201 33.9846 8.23596 33.3685C8.08279 32.7501 8.35499 32.0828 7.62169 31.5613C7.16138 30.0393 7.20337 28.611 6.31768 27.1379C6.551 26.5659 6.20425 26.0909 6.01219 25.5678C6.63517 23.7094 6.63987 21.71 7.14698 19.8044C8.47307 14.8973 11.2658 11.0332 15.7957 8.2114C18.5448 6.44205 21.7557 5.52819 25.4277 5.80316C26.0848 5.84885 26.5103 5.80007 27.0135 5.56059C27.2841 5.5598 27.6316 5.70157 27.9023 5.70079C28.4451 5.03275 29.0641 4.84053 29.7212 4.88623C29.0252 4.93585 28.4062 5.12807 27.9023 5.70079C29.7181 6.21917 31.4958 6.49966 33.1211 5.82848C33.9695 6.7305 35.0511 7.06054 36.2876 7.34258C39.4176 7.95235 42.2754 9.22939 44.8618 10.8404C47.4871 12.3562 49.6854 14.5872 51.1489 16.9632C53.2671 20.3846 55.1917 23.9493 56.1107 27.6598C56.6083 29.753 56.99 31.7988 56.4051 33.8951C55.8211 35.6582 55.545 37.9917 54.1871 39.995Z" fill="#7DA0A3" />
    </svg>

  )
}

export default Balao