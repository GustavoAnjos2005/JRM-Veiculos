//componentes
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="conntainer mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* Seletor de localização */}
          <LocationSelection />
          {/* Seletor de data*/}
          <DateSelection />
          {/* Seletor de horas*/}
          <HoursSelection />
          {/* botão */}
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Pesquisar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
