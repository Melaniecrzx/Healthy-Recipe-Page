import ListSection from "../ListSection/ListSection";

export default function OurPhilosophy() {
    const items = [
        { id: 1, title: 'Whole ingredients first.', desc: 'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.' },
        { id: 2, title: 'Flavor without compromise.', desc: 'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.' },
        { id: 3, title: 'Respect for time.', desc: 'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.' },
        { id: 4, title: 'Sustainable choices.', desc: 'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.' },


    ]

    return <ListSection title='Our food philosophy' items={items} />
}