import Link from "next/link"
import Card from "./Card"
import { deleteCompany } from "@/libs/deleteCompany";

export default async function VenueCatalog({companiesJson}: {companiesJson: Promise<CompanyJson>}) {
    const companyJsonReady = await companiesJson;
    return(
        <>
        <span className="text-black">
            Explore {companyJsonReady.count} fabulous companies in our catalog
        </span> 
        <div style={{margin:"20px", display:"flex",flexDirection:"row", alignContent:"space-around",justifyContent:"space-around", flexWrap:"wrap",padding:"20px"}}>
            {
                companyJsonReady.data.map((companyItem)=>(
                    <Link href={`/delete/${companyItem._id}`} className="w-1/5 px-5 py-3" key={companyItem._id}> 
                        <Card companyName={companyItem.name} imgSrc='https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH'/>
                    </Link>
                ))
            }
                
        </div>
        </>
    )
}