import ListSection from "../ListSection/ListSection"

export default function WhyWeExist() {
    const items = [
        {id:1, title: 'Cut through the noise.', desc: 'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.'},
        {id:2, title: 'Empower home kitchens.', desc: 'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.'},
        {id:3, title: 'Make healthy look good.', desc: 'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.'},

    ]

    return <ListSection title='Why we exist' items={items}/>
}