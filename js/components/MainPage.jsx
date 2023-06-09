// js/components/MainPage.jsx
//export default function MainPage() {
//	return (
//		<div> </div>
//	)
//}

// js/components/MainPage.jsx
/*
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);
	
	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div>This is my first page</div>
	)
}

// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
						setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<section className={"bg-white dark:bg-gray-900"}>
			<div className={"container px-6 py-10 mx-auto"}>
				<h1 className={"w-[500px] mx-auto text-center text-6xl"}>My library app</h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Aceasta este o aplicatie unde salvezi cartile din biblioteca ta. Pentru momentele cand nu stii daca ai cumparat deja acel volum sau nu &#x1F60A;</p>

				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
					{records.map(record => (
						<div
							key={record._id}
							className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{record.title}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{record.description}
							</p>
							<div className={"flex justify-center mt-4"}>
								<button type="button"
								        id={record._id}
								        onClick={deleteRecord}
								        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}*/
/*
// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
						setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}*/

	/*
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[500px] mx-auto text-center text-6xl">Fun facts app</h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">This is an app that showcases fun facts</p>

				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
					{records.map(record => (
						<div
							key={record._id}
							className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{record.title}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{record.description}
							</p>
							<div className={"flex justify-center mt-4"}>
								<button type="button"
								        id={record._id}
								        onClick={deleteRecord}
								        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}*/

/*return (
     <section className={"bg-white"}>
        <div className={"container px-6 py-10 mx-auto"}>
            <h1 className={"w-[500px] mx-auto text-center text-6xl"}>Fun facts app</h1>
            <p>This is an app that showcases fun facts</p>
            <div>
                {
                    records.map(record=> (
                        <div key ={record._id}>
                            <h3>{record.titlu}</h3>
                            <p>{record.descriere}</p>
                        </div>
                    ))
                }
            </div>
        </div>

     </section>
)*/


// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);
    
   


	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
						setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<section className="bg-green-300 dark:bg-green-900">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[500px] mx-auto text-center text-6xl">My library app</h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Biblioteca ta personală în buzunarul tău. O aplicație care te ajută să îți organizezi lecturile. În caz că vrei să te lauzi cu biblioteca ta și să impresionezi! &#x1F60A;</p>
               
                <div className="flex justify-center mt-4">
  <button 
    type="button"
    onClick={() => window.open('https://cloud-computing-rust.vercel.app/insert', '_blank')} 
    className="focus:outline-none text-white bg-blue-700 bg-orange-400 hover:bg-gradient-to-b from-blue-400 to-orange-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  >
    Ai cumpărat o nouă carte? Click aici să o adaugi!
  </button>
</div>









				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
					{records.map(record => (
						<div
							key={record._id}
							className="block max-w-sm p-6 bg-red-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{record.title}
							</h5>
							
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{record.description}
							</p>
							<div className={"flex justify-center mt-4"}>
								<button type="button"
								        id={record._id}
								        onClick={deleteRecord}
								        className="focus:outline-none text-white bg-red-200 bg-gradient-to-b from-yellow-400 to-purple-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}