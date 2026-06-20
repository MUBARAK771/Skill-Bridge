'use client'

interface EmployerCardProps {
  label: string
  sub?: string
}

export default function EmployerCard ({label,sub}: EmployerCardProps){

    return(
        <div className=" rounded-xl border border-primary p-4 sm:px-9 mx-9 py-19 shadow-xl flex flex-[0.2]  flex-col shadow-[#E5EBFC]">
      <p className="text-lg sm:text-[28px] text-primary text-center font-bold tracking-wide">
        {label}
      </p>
      {sub && (
        <p className="text-[11px] sm:text-lg text-[#95989A] mt-1 text-center">
          {sub}
        </p>
      )}
    </div>
    )
}
