"use client";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function Form() {
	const [programs, setPrograms] = useState([]);
	const [natureOfRequest, setNatureOfRequest] = useState([]);
	const [result, setResult] = useState(null);

	useEffect(() => {
		const fetchPrograms = async () => {
			try {
				const response = await fetch(
					"https://usstm.ca/data/contact/programs.json"
				);
				const programs = await response.json();
				setPrograms(programs);
			} catch (error) {
				console.error("Error fetching programs data:", error);
			}
		};
		const fetchNatureOfRequest = async () => {
			try {
				const response = await fetch(
					"https://usstm.ca/data/contact/natureOfRequest.json"
				);
				const data = await response.json();
				setNatureOfRequest(data);
			} catch (error) {}
		};
		fetchPrograms();
		fetchNatureOfRequest();
	}, []);

	const schema = useMemo(
		() =>
			z.object({
				firstName: z
					.string()
					.min(1, {
						message: "Name must be between 1 and 50 letters.",
					})
					.max(50, {
						message: "Name must be between 1 and 50 letters.",
					})
					.regex(/[A-Za-z]+/, {
						message: "Name must only include letters.",
					}),
				lastName: z
					.string()
					.min(1, {
						message: "Name must be between 1 and 50 letters.",
					})
					.max(50, {
						message: "Name must be between 1 and 50 letters.",
					})
					.regex(/[A-Za-z]+/, {
						message: "Name must only include letters.",
					}),
				email: z.string().regex(/^\S+@torontomu\.ca$/, {
					message: "Please input your TMU email.",
				}),
				program: z.enum([programs, "Other"].flat(), {
					message: "Please select an option.",
				}),
				year: z.enum(
					[
						Array.from({ length: 5 }, (_, i) => `Year ${i + 1}`),
						"Other",
					].flat(),
					{ message: "Please select an option." }
				),
				natureOfRequest: z.enum(
					[natureOfRequest.map((r) => r.value), "Other"].flat(),
					{ message: "Please select an option." }
				),
				subject: z
					.string()
					.min(3, {
						message: "Subject must be between 3 and 50 characters.",
					})
					.max(50, {
						message: "Subject must be between 3 and 50 characters.",
					}),
				message: z.string().min(10, {
					message: "Message must be at least 10 characters.",
				}),
			}),
		[programs, natureOfRequest]
	);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm({ resolver: zodResolver(schema) });

	const onSubmit = async (data) => {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_WORKER_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				console.error(`Error with status code ${res.status}\n${res.text() || res.statusText}`)

				setResult("error");
			} else {
				setResult("success");
				reset();
			}
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="bg-gray-200 pt-8 pb-4 px-5 lg:px-20 w-full md:w-4/5 lg:w-3/4 mx-auto rounded min-h-[90vh] flex justify-center items-center flex-col">
			<h2 className="text-highlight-dark text-center py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
				Get in Touch!
			</h2>
			<p className="pb-6 text-center w-3/4 mx-auto">
				If you have any questions, concerns, or requests, please feel
				free to reach out to us. We are here to help you!
			</p>
			{result &&
				(result === "success" ? (
					<p
						className={`pb-6 text-center w-3/4 mx-auto text-green-600 font-semibold`}
					>
						Your message has been submitted!
					</p>
				) : (
					<p
						className={`pb-6 text-center w-3/4 mx-auto text-red-500 font-semibold`}
					>
						An error occurred submitting the form. Please try again later.
					</p>
				))}
			<form
				id="contact-form"
				className="w-full"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex md:flex-row flex-col justify-center items-center">
					<div className="flex flex-col w-[95%] md:w-1/2">
						<label htmlFor="firstName">First Name</label>
						<input
							id="firstName"
							className="w-full md:w-[95%] my-2 text-base h-9 rounded-md pl-2 placeholder-gray-500"
							placeholder="Enter name"
							autoComplete="given-name"
							{...register("firstName")}
						/>
						{errors.firstName?.message && (
							<p className="text-red-500 text-sm">
								{errors.firstName?.message}
							</p>
						)}
					</div>
					<div className="flex flex-col w-[95%] md:w-1/2 mt-4 md:mt-0">
						<label htmlFor="lastName">Last Name</label>
						<input
							id="lastName"
							className="w-full my-2 text-base h-9 rounded-md pl-2 placeholder-gray-500"
							placeholder="Enter name"
							autoComplete="family-name"
							{...register("lastName")}
						/>
						{errors.lastName?.message && (
							<p className="text-red-500 text-sm">
								{errors.lastName?.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex flex-col w-full mt-4 justify-center items-center">
					<div className="flex w-[95%] md:w-full flex-col">
						<label htmlFor="tmuEmail" className="self-start">
							TMU Email
						</label>
						<input
							id="email"
							className="w-[3/4] md:w-full my-2 pl-2 text-base rounded-md h-9 placeholder-gray-500"
							placeholder="Enter email"
							autoComplete="email"
							{...register("email")}
						/>
						{errors.email?.message && (
							<p className="text-red-500 text-sm">
								{errors.email?.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex flex-col md:flex-row mt-4 justify-center items-center">
					<div className="w-[95%] md:w-1/2">
						<label htmlFor="program">Program</label>
						<select
							id="program"
							className="w-full md:w-[95%] my-2 h-9 rounded-md pl-1 bg-white hover:cursor-pointer"
							defaultValue={"None"}
							{...register("program")}
						>
							<option value="None" disabled={true}>
								-- Select your program --
							</option>
							{programs.map((program, index) => (
								<option key={index} value={program}>
									{program}
								</option>
							))}
							<option value="Other">Other</option>
						</select>
						{errors.program?.message && (
							<p className="text-red-500 text-sm">
								{errors.program?.message}
							</p>
						)}
					</div>
					<div className="w-[95%] md:w-1/2 mt-4 md:mt-0">
						<label htmlFor="year">Year</label>
						<select
							id="year"
							className="w-full my-2 h-9 rounded-md pl-1 bg-white hover:cursor-pointer"
							defaultValue={"None"}
							{...register("year")}
						>
							<option value="None" disabled={true}>
								-- Select your year --
							</option>
							<option value="Year 1">Year 1</option>
							<option value="Year 2">Year 2</option>
							<option value="Year 3">Year 3</option>
							<option value="Year 4">Year 4</option>
							<option value="Year 5">Year 5</option>
							<option value="Other">Other</option>
						</select>
						{errors.year?.message && (
							<p className="text-red-500 text-sm">
								{errors.year?.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex mt-4 justify-center items-center">
					<div className="md:w-full w-[95%]">
						<label htmlFor="natureOfRequest">
							Nature of Request
						</label>
						<select
							id="natureOfRequest"
							className="w-full my-2 h-9 rounded-md pl-1 bg-white hover:cursor-pointer"
							defaultValue={"None"}
							{...register("natureOfRequest")}
						>
							<option value="None" disabled={true}>
								Please select an option
							</option>
							{natureOfRequest.map((request) => (
								<option key={request.id} value={request.value}>
									{request.option}
								</option>
							))}
						</select>
						{errors.natureOfRequest?.message && (
							<p className="text-red-500 text-sm">
								{errors.natureOfRequest?.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex w-full mt-4 justify-center items-center">
					<div className="flex flex-col md:w-full w-[95%]">
						<label htmlFor="subject">Subject</label>
						<input
							id="subject"
							className="w-full my-2 text-base h-9 rounded-md pl-2 placeholder-gray-500"
							placeholder="Subject line"
							{...register("subject")}
						/>
						{errors.subject?.message && (
							<p className="text-red-500 text-sm">
								{errors.subject?.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex w-full mt-4 justify-center items-center">
					<div className="flex flex-col md:w-full w-[95%]">
						<label htmlFor="description">Message</label>
						<textarea
							id="message"
							placeholder="Please describe your reason for contact here"
							className="w-full h-28 lg:h-46 border border-gray-300 text-base p-2 rounded-md my-2 placeholder-gray-500 text-wrap break-normal"
							{...register("message")}
						/>
						{errors.message?.message && (
							<p className="text-red-500 text-sm">
								{errors.message?.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex items-center justify-center mt-4">
					<button
						id="submit-button"
						type="submit"
						disabled={isSubmitting}
						className="bg-highlight-dark text-white px-4 py-2 rounded shadow-md lg:text-lg"
					>
						Submit{isSubmitting ? "ting..." : ""}
					</button>
				</div>
			</form>
		</div>
	);
}
