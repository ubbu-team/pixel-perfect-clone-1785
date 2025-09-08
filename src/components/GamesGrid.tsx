import React from 'react';
import GameCard from './GameCard';

const GamesGrid: React.FC = () => {
  const gameData = [
    {
      username: "smallwhale29",
      title: "Viagem Humanitária pelo Mundo",
      likes: 24,
      views: 4512,
      shares: 4512,
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574",
      avatarSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 32px; height: 32px; border-radius: 50%">
        <circle cx="16" cy="16" r="16" fill="url(#pattern0_1_668)"/>
        <defs>
          <pattern id="pattern0_1_668" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_1_668" transform="scale(0.00609756)"/>
          </pattern>
        </defs>
      </svg>`
    },
    {
      username: "smallwhale29",
      title: "Viagem Humanitária pelo Mundo",
      likes: 24,
      views: 4512,
      shares: 4512,
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574",
      avatarSvg: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 32px; border-radius: 50%">
        <rect width="26" height="26" rx="13" fill="#ECF4FF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.3996 12.1132C7.26534 12.9402 6.36501 14.0693 5.81715 15.3831C5.56593 15.9855 4.87392 16.2702 4.2715 16.019C3.66909 15.7678 3.38438 15.0758 3.6356 14.4733C5.15321 10.8342 8.74603 8.27271 12.9396 8.27271C17.1333 8.27271 20.7256 10.8342 22.2432 14.4733C22.4944 15.0758 22.2097 15.7678 21.6073 16.019C21.0049 16.2702 20.3129 15.9855 20.0617 15.3831C19.5139 14.0694 18.6137 12.9404 17.4797 12.1134C17.521 12.3613 17.5425 12.6159 17.5425 12.8756C17.5425 15.4177 15.4817 17.4784 12.9396 17.4784C10.3975 17.4784 8.33675 15.4177 8.33675 12.8756C8.33675 12.6159 8.35826 12.3612 8.3996 12.1132ZM12.9396 10.6363C11.7029 10.6363 10.7004 11.6389 10.7004 12.8756C10.7004 14.1123 11.7029 15.1148 12.9396 15.1148C14.1763 15.1148 15.1789 14.1123 15.1789 12.8756C15.1789 11.6389 14.1763 10.6363 12.9396 10.6363Z" fill="#2580FF"/>
      </svg>`
    },
    {
      username: "smallwhale29",
      title: "Viagem Humanitária pelo Mundo",
      likes: 24,
      views: 4512,
      shares: 4512,
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574",
      avatarSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 32px; height: 32px; border-radius: 50%">
        <circle cx="16" cy="16" r="16" fill="url(#pattern0_1_714)"/>
        <defs>
          <pattern id="pattern0_1_714" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_1_714" transform="scale(0.00609756)"/>
          </pattern>
        </defs>
      </svg>`
    },
    {
      username: "smallwhale29",
      title: "Viagem Humanitária pelo Mundo",
      likes: 24,
      views: 4512,
      shares: 4512,
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574",
      avatarSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 32px; height: 32px; border-radius: 50%">
        <circle cx="16" cy="16" r="16" fill="url(#pattern0_1_841)"/>
        <defs>
          <pattern id="pattern0_1_841" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_1_841" transform="scale(0.00609756)"/>
          </pattern>
        </defs>
      </svg>`
    },
    {
      username: "smallwhale29",
      title: "Viagem Humanitária pelo Mundo",
      likes: 24,
      views: 4512,
      shares: 4512,
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574",
      avatarSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 32px; height: 32px; border-radius: 50%">
        <circle cx="16" cy="16" r="16" fill="url(#pattern0_1_887)"/>
        <defs>
          <pattern id="pattern0_1_887" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_1_887" transform="scale(0.00609756)"/>
          </pattern>
        </defs>
      </svg>`
    },
    {
      username: "smallwhale29",
      title: "Viagem Humanitária pelo Mundo",
      likes: 24,
      views: 4512,
      shares: 4512,
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574",
      avatarSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 32px; height: 32px; border-radius: 50%">
        <circle cx="16" cy="16" r="16" fill="url(#pattern0_1_911)"/>
        <defs>
          <pattern id="pattern0_1_911" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_1_911" transform="scale(0.00609756)"/>
          </pattern>
        </defs>
      </svg>`
    }
  ];

  return (
    <section className="w-full bg-[#D9D9D9] px-5 py-20">
      <h2 className="text-[#10192E] text-[40px] font-bold leading-[60px] text-center mb-[60px] max-sm:text-[28px] max-sm:leading-9">
        Explore the best Flappy Bird Games
      </h2>
      
      <div className="grid grid-cols-[repeat(3,1fr)] gap-10 max-w-[1200px] mb-[60px] mx-auto my-0 max-md:grid-cols-[repeat(2,1fr)] max-md:gap-[30px] max-sm:grid-cols-[1fr] max-sm:gap-5">
        {gameData.map((game, index) => (
          <GameCard
            key={index}
            username={game.username}
            title={game.title}
            likes={game.likes}
            views={game.views}
            shares={game.shares}
            imageUrl={game.imageUrl}
            avatarSvg={game.avatarSvg}
          />
        ))}
      </div>
      
      <button className="flex items-center justify-center w-[181px] h-[53px] text-[#2580FF] text-lg font-bold cursor-pointer bg-[#ECF4FF] mx-auto my-0 rounded-[40px] hover:bg-[#ddeeff] transition-colors">
        Ver mais
      </button>
    </section>
  );
};

export default GamesGrid;
