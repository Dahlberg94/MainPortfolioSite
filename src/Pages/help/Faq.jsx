export default function Faq() {
    return (
        <div>
            <h3>Frequently asked questioin</h3>

            {[1, 2, 3, 4, 5,].map((n) => (
                <div className="faq__question" key={n}>
                    <p>
                        <strong>Lorem ipsum dolor sit amet.</strong>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit architecto saepe dolore doloremque cumque facilis perspiciatis voluptatem aliquam quibusdam quod!
                    </p>
                </div>
            ))}
        </div>
    )
}