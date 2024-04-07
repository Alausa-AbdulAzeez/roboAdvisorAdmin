const GoalDrift = ({ totalInvested, totalReturned, goal, type }) => {
  const percentCompletion = ((totalInvested + totalReturned) / goal) * 100;
  const converted = percentCompletion.toFixed(2).toString() + "%";

  return (
    <div className="flex flex-col gap-[16px] max-2xl:gap-[12.8px]">
      <div className="text-[16px] text-[#00E09D] leading-[28px] font-semibold max-2xl:text-[12.8px] max-2xl:leading-[22.4px]">
        {type}
      </div>
      <div className="flex gap-[16px] max-2xl:gap-[12.8px] items-center">
        <div className="h-[22px] rounded-[75px] w-[272px] border border-borderColor max-2xl:h-[17.6px] max-2xl:rounded-[60px] max-2xl:w-[217.6px]">
          <div
            style={{ width: converted }}
            className={`h-full  rounded-tl-[75px] rounded-bl-[75px] bg-mainBlue `}
          ></div>
        </div>
        <div className="flex gap-[2px]">
          <div className="text-[16px] font-[400] text-silverTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            Goal:
          </div>
          <div className="text-[16px] font-[600] text-blackTextColor leading-[28px] max-2xl:leading-[22.4px]  max-2xl:text-[12.8px]">
            N10,000,000
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalDrift;
