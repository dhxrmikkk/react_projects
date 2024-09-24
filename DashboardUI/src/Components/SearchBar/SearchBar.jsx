import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import React from "react";

const SearchBar = ({ label, className }) => {
    return (
        <div className="hidden xl:flex">
            <Input
                label={label}
                className={className}
                icon={<MagnifyingGlassIcon className="h-5 w-5 text-[#979797]" />}
            />
        </div>
    );
};

export default SearchBar;
