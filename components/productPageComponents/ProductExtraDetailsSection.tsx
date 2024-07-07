import React from 'react'

const ProductExtraDetailsSection = () => {
    const technicalDetails: { name: string, value: string }[] = [
        { name: "Speciality", value: "suitable for vegetarians" },
        { name: "Weight", value: "1 Kilograms" },
        { name: "Volume", value: "1000 Millilitres" },
        { name: "Ingredient Type", value: "Vegetarian" },
        { name: "Brand", value: "Tata Salt" },
        { name: "Item package quantity", value: "1" },
        { name: "Form", value: "Powder" },
        { name: "Serving Recommendation", value: "Pinch" },
        { name: "Manufacturer", value: "Tata Sampann" },
        { name: "Item model number", value: "8904043901015 FBA" },
        { name: "Net Quality", value: "1000.0 gram" },
        { name: "Product Dimensions", value: "5.4 x 14.2 x 19.5 cm; 1 Kilograms" },
        { name: "Serving Size", value: "1" },
        { name: "Energy (kcal)", value: "0 Kilocalories" },
        { name: "Protein", value: "0 Grams" },
        { name: "Fat", value: "0 Grams" },
        { name: "Carbohydrate", value: "0 Grams" },
    ];

    const additionalInfo: { name: string, value: string }[] = [
        { name: "ASIN", value: "B07575FPC3" },
        { name: "Customer Reviews", value: "61,886 ratings" },
        { name: "Date First Available", value: "29 June 2016" },
        { name: "Manufacturer", value: "Tata Sampann" },
        { name: "Item Weight", value: "1 Kg" },
        { name: "Item Dimensions LxWxH", value: "5.4 x 14.2 x 19.5 Centimeters" },
    ];

    return (
        <>
            <div className="border-t border-black border-opacity-30 px-5">
                <div className="font-bold py-5 text-orange-700">Product Information</div>
                <div className="grid grid-cols-2 pb-5">
                    <div className="px-5">
                        <div className="font-semibold text-[1.5rem] pb-5">
                            Technical Details
                        </div>
                        <div className="">
                            {
                                technicalDetails.map((tech, index) => {
                                    return (
                                        <div key={index} className="flex border-y border-black border-opacity-30">
                                            <div className="w-1/2 px-2 py-1 bg-[#f0f2f2]">{tech.name}</div>
                                            <div className="py-1 px-2">{tech.value}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="font-semibold text-[1.5rem] pb-5">
                            Additonal Information
                        </div>
                        <div className="">
                            {
                                additionalInfo.map((tech, index) => {
                                    return (
                                        <div key={index} className="flex border-y border-black border-opacity-30">
                                            <div className="w-1/2 px-2 py-1 bg-[#f0f2f2]">{tech.name}</div>
                                            <div className="py-1 px-2">{tech.value}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className="px-5 border-black border-opacity-30 border-t">
                <div className="py-4 font-semibold text-[1.5rem]">
                    Important information
                </div>
                <div className="pl-5">
                    <div className="pb-3 font-semibold text-[1.2rem]">Legal Disclaimer:</div>
                    <div className="pb-3 text-sm">Actual product packaging and materials may contain more and different information than what is shown on our app or website. We recommend that you do not rely solely on the information presented here and that you always read labels, warnings, and directions before using or consuming a product.</div>
                </div>
            </div>
            <div className="px-5 border-black border-opacity-30 border-t">
                <div className="py-4 font-semibold text-[1.5rem]">Product description</div>
                <div className="pl-5 flex flex-col gap-2 text-sm pb-3">
                    <div className="">Desh ki Sehat, Desh ka Namak!</div>
                    <div className="">Now celebrating 40 years of trust, Tata Salt has pioneered India&apos;s largest vacuum evaporation technology. Untouched by hand, Tata Salt offers an assurance of Iodine. With vacuum evaporation technology, Tata namak offers a hygienic alternative to your regular table salt.</div>
                    <div className="">It contains the requisite amount of iodine which is an essential dietary nutrient for humans. Iodine is required for normal growth, thyroid, and brain function. Add the goodness of Tata Salt to your dietary intake and make your meals delicious and nourishing.</div>
                    <div className="">Storage Instructions: Store in a cool and dry place.</div>
                    <div className="">*It is generally accepted that Iodine helps in mental development of children.</div>
                </div>
            </div>
        </>
    )
}

export default ProductExtraDetailsSection