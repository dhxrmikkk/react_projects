import { BanknotesIcon, EyeIcon, ShoppingBagIcon, UsersIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const Cards = ({ name, number, mode }) => {
    return (
        <>
            <Card className="shadow-none border border-[#ededed] h-32 w-full flex justify-center">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        <span className="font-geist text-black font-semibold">{name}</span>
                    </Typography>
                    <Typography>
                        <span className="font-geist font-[500] text-xl text-black flex items-center">
                            {
                                mode === "view" ?
                                    <EyeIcon className="w-4 h-4 me-2" />
                                    : mode === "profit" ?
                                        <BanknotesIcon className="w-4 h-4 me-2" />
                                        : mode === "product" ?
                                            <ShoppingBagIcon className="w-4 h-4 me-2" />
                                            :
                                            <UsersIcon className="w-4 h-4 me-2" />
                            }
                            {number}
                        </span>
                    </Typography>
                </CardBody>
            </Card>
        </>
    )
}

export default Cards