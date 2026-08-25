import { useState } from "react";

const AddMovieForm = ( { onAddMovie }) => {
    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie({
            id: Date.now(),
            title,
            poster,
            genre,
            year: Number(year),
            rating: Number(rating),
            watched: false,
        });

        setTitle("");
        setPoster("");
        setGenre("");
        setYear("");
        setRating(5);
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-primary">Add Movie</button>
        </form>
    );
};

export default AddMovieForm;