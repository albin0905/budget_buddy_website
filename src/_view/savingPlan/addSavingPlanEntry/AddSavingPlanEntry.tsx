import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewAllPlans = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Price:', price);
    };

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col text-center">
                    <h1>Neuer Betrag</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Name eingeben"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="price">Preis</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                value={price}
                                onChange={handlePriceChange}
                                placeholder="Preis eingeben"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Speichern</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ViewAllPlans;
