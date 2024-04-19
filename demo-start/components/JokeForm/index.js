import useSWR from "swr";

export default function JokeForm() {
    const url = "/api/jokes";
    const { mutate } = useSWR(url);

    async function handleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        console.log('formData', formData);
        const jokeData = Object.fromEntries(formData);
        console.log('jokeData', jokeData);

        const response = await fetch(url, {
           method: "POST",
           headers: {
            "Content-Type": "application/json"
           },
           body: JSON.stringify(jokeData),
        });
        console.log('JSON.stringify', JSON.stringify(jokeData));

        if(response.ok){
            mutate();
        }
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="joke-input">Enter a new joke</label>
        <input type="text" id="joke-input" name="joke" required minlength="3" />
        <button type="submit">Submit</button>
      </form>
    );
  }