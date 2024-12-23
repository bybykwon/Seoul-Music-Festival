import Image from 'next/image';

const StageInfo = ({ stageName, description, imageUrl }) => {
    return (
        <div>
            <div className='inline-flex items-center justify-center text-[1.25rem] text-white font-bold bg-[#601986] rounded-full mb-[38px] px-4'>
                {stageName}
            </div>

            <div className='flex flex-col items-center'>
                {/* 이미지 추가 */}
                <Image
                    src={imageUrl}
                    alt={stageName}
                    className='w-[300px] h-auto rounded-lg shadow-md mb-4 object-cover'
                    width={400}
                    height={250}
                />

                <p className='mt-1 mb-3 text-gray-700 '>{description}</p>
            </div>
        </div>
    );
};

export default StageInfo;
