"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ProfileData {
  name: string;
  avatar_url: string;
  bio: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

const AboutMe = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("https://api.github.com/users/kazinayeem");
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setProfile(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to fetch profile data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No profile data available.</p>
      </div>
    );
  }

  return (
    <div
      id="about"
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 relative">
            <Image
              src={profile.avatar_url}
              alt={profile.name}
              width={192}
              height={192}
              className="rounded-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="mt-6 md:mt-0 md:ml-8 flex-1">
            <h1 className="text-2xl md:text-3xl font-semibold">
              {profile.name}
            </h1>
            <p className="text-gray-600 mt-2">
              {profile.bio || "No bio available."}
            </p>
            <div className="mt-4 text-gray-700 space-y-2">
              <p>
                <strong>Company:</strong> {profile.company || "N/A"}
              </p>
              <p>
                <strong>Location:</strong> {profile.location || "N/A"}
              </p>
              <p>
                <strong>Public Repos:</strong> {profile.public_repos}
              </p>
              <p>
                <strong>Followers:</strong> {profile.followers}
              </p>
              <p>
                <strong>Following:</strong> {profile.following}
              </p>
            </div>
            <div className="mt-6">
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
