export default function Contact() {
    return (
        <div>
            <h3>Kontakta oss</h3>
            <form action="">
                <label htmlFor="">
                    <span>Email:</span>
                    <input type="email" name="email" id="" required />
                </label>
                <label htmlFor="">
                    <span>Fråga:</span>
                    <input  name="massage" id="" required />
                </label>
                <button>Skicka</button>
            </form>
        </div>
    )
}