import React from 'react';

interface GameCardProps {
  username: string;
  title: string;
  likes: number;
  views: number;
  shares: number;
  imageUrl: string;
  avatarSvg: string;
}

const GameCard: React.FC<GameCardProps> = ({
  username,
  title,
  likes,
  views,
  shares,
  imageUrl,
  avatarSvg
}) => {
  return (
    <article className="w-[375px] h-[450px] shadow-[0_4px_4px_rgba(170,170,170,0.25)] overflow-hidden relative bg-white rounded-[20px] max-sm:w-full max-sm:max-w-[375px] max-sm:mx-auto max-sm:my-0">
      <header className="flex items-center justify-between pt-[19px] pb-0 px-4">
        <div className="flex items-center gap-2">
          <div dangerouslySetInnerHTML={{ __html: avatarSvg }} />
          <span className="text-black text-base font-bold">{username}</span>
        </div>
        <button 
          className="w-8 h-8 border flex items-center justify-center cursor-pointer bg-white rounded-2xl border-solid border-[rgba(0,0,0,0.10)] hover:bg-gray-50 transition-colors"
          aria-label="More options"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.54294 10.8833C7.54294 11.9247 6.69868 12.769 5.65723 12.769C4.61578 12.769 3.77151 11.9247 3.77151 10.8833C3.77151 9.84182 4.61578 8.99756 5.65723 8.99756C6.69868 8.99756 7.54294 9.84182 7.54294 10.8833Z" fill="black"/>
            <path d="M12.8857 10.8462C12.8857 11.8876 12.0415 12.7319 11 12.7319C9.95855 12.7319 9.11429 11.8876 9.11429 10.8462C9.11429 9.80471 9.95855 8.96045 11 8.96045C12.0415 8.96045 12.8857 9.80471 12.8857 10.8462Z" fill="black"/>
            <path d="M18.2285 10.8462C18.2285 11.8876 17.3842 12.7319 16.3428 12.7319C15.3013 12.7319 14.4571 11.8876 14.4571 10.8462C14.4571 9.80471 15.3013 8.96045 16.3428 8.96045C17.3842 8.96045 18.2285 9.80471 18.2285 10.8462Z" fill="black"/>
          </svg>
        </button>
      </header>
      
      <div className="w-[281px] h-[244px] overflow-hidden relative bg-[#D9D9D9] mt-[19px] mb-0 mx-auto rounded-[20px]">
        <img
          src={imageUrl}
          alt={`${title} game screenshot`}
          className="w-[287px] h-[265px] absolute top-[-18px] object-cover -left-1"
        />
      </div>
      
      <footer className="absolute p-4 bottom-0 inset-x-0">
        <h3 className="text-black text-xl font-bold text-center mb-4">{title}</h3>
        <div className="flex items-center justify-center gap-5">
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity" aria-label={`${likes} likes`}>
            <svg width="26" height="26" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.77265 1.9034C3.64722 1.9034 1.92422 3.60776 1.92422 5.7102C1.92422 7.13944 2.72005 8.3861 3.90187 9.03793L3.91438 9.04496L9.00003 11.9494L14.0857 9.04535L14.0981 9.03836C15.2799 8.38652 16.0758 7.13986 16.0758 5.71063C16.0758 3.60819 14.3528 1.90383 12.2273 1.90383C11.233 1.90383 10.329 2.27515 9.64568 2.887C9.27916 3.21521 8.72084 3.21521 8.35432 2.887C7.67086 2.27499 6.76675 1.9034 5.77265 1.9034ZM0 5.7102C0 2.55654 2.5845 0 5.77265 0C6.9675 0 8.07882 0.359892 9.00003 0.975253C9.92135 0.359948 11.0327 0.000425103 12.2273 0.000425103C15.4155 0.000425103 18 2.55697 18 5.71063C18 7.85496 16.8047 9.72185 15.0418 10.6972L9.481 13.8725C9.18334 14.0425 8.81661 14.0425 8.51894 13.8725L2.95818 10.6967C1.19529 9.72138 0 7.85451 0 5.7102Z" fill="#FF5A6E"/>
            </svg>
            <span className="text-[#FF5A6E] text-base font-bold">{likes}</span>
          </button>
          
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity" aria-label={`${views} views`}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="26" height="26" rx="13" fill="#ECF4FF"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M8.3996 12.1132C7.26534 12.9402 6.36501 14.0693 5.81715 15.3831C5.56593 15.9855 4.87392 16.2702 4.2715 16.019C3.66909 15.7678 3.38438 15.0758 3.6356 14.4733C5.15321 10.8342 8.74603 8.27271 12.9396 8.27271C17.1333 8.27271 20.7256 10.8342 22.2432 14.4733C22.4944 15.0758 22.2097 15.7678 21.6073 16.019C21.0049 16.2702 20.3129 15.9855 20.0617 15.3831C19.5139 14.0694 18.6137 12.9404 17.4797 12.1134C17.521 12.3613 17.5425 12.6159 17.5425 12.8756C17.5425 15.4177 15.4817 17.4784 12.9396 17.4784C10.3975 17.4784 8.33675 15.4177 8.33675 12.8756C8.33675 12.6159 8.35826 12.3612 8.3996 12.1132ZM12.9396 10.6363C11.7029 10.6363 10.7004 11.6389 10.7004 12.8756C10.7004 14.1123 11.7029 15.1148 12.9396 15.1148C14.1763 15.1148 15.1789 14.1123 15.1789 12.8756C15.1789 11.6389 14.1763 10.6363 12.9396 10.6363Z" fill="#2580FF"/>
            </svg>
            <span className="text-[#2580FF] text-base font-bold">{views.toLocaleString()}</span>
          </button>
          
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity" aria-label={`${shares} shares`}>
            <svg width="22" height="22" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.70807 3.08374C3.01971 2.70001 3.5651 2.60171 3.99127 2.85229L6.78815 4.49878C7.26411 4.77881 7.42356 5.39096 7.14362 5.86694C6.86368 6.34271 6.25136 6.50191 5.77545 6.22241L4.97369 5.74976C4.95861 7.24989 5.9329 8.59963 7.3858 8.98901C8.31972 9.23918 9.27442 9.04987 10.0381 8.53491C10.496 8.22635 11.118 8.34673 11.4268 8.80444C11.7354 9.26219 11.6138 9.8833 11.1563 10.1921C9.93987 11.0125 8.39253 11.329 6.86823 10.9207C4.55281 10.3002 3.03776 8.21958 2.97565 5.92749L2.22565 6.85327C1.87775 7.28207 1.2483 7.34757 0.819397 6.99976C0.390722 6.65194 0.324403 6.02239 0.671936 5.59351L2.70807 3.08374ZM8.10065 0.406982C10.497 0.407178 12.4976 2.02446 13.1514 4.22144L13.6368 3.13452C13.8618 2.63018 14.4537 2.40368 14.9581 2.62866C15.4622 2.85367 15.6887 3.44473 15.4639 3.94897L14.1475 6.90015C13.9459 7.35173 13.4435 7.58774 12.9669 7.45581L9.8399 6.5896C9.3077 6.4423 8.99547 5.89231 9.14264 5.36011C9.28991 4.82804 9.84005 4.51591 10.3721 4.66284L11.2686 4.91089C10.8946 3.45845 9.60444 2.40718 8.10065 2.40698C7.77592 2.40702 7.46299 2.45527 7.16901 2.54468C6.64072 2.70513 6.08162 2.40693 5.92096 1.87866C5.76064 1.35058 6.05905 0.792436 6.58698 0.631592C7.06727 0.485519 7.57626 0.407021 8.10065 0.406982Z" fill="#2580FF"/>
            </svg>
            <span className="text-[#2580FF] text-base font-bold">{shares.toLocaleString()}</span>
          </button>
        </div>
      </footer>
    </article>
  );
};

export default GameCard;
