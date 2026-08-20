"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow, FaPlus, FaSpinner } from "react-icons/fa6";

import { supabase, SubmittedProject } from "@/lib/supabase";
import MagicButton from "./ui/MagicButton";

const PAGE_SIZE = 6;

const CommunityProjects = () => {
  const [projects, setProjects] = useState<SubmittedProject[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [submitterName, setSubmitterName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState<string | null>(null);

  const fetchProjects = async (pageIndex: number) => {
    setLoading(true);
    const from = pageIndex * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    const { data, count, error } = await supabase
      .from("submitted_projects")
      .select("*", { count: "exact" })
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (!error) {
      setProjects(data ?? []);
      setTotal(count ?? 0);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setSubmitting(true);
    setSubmitMsg(null);

    let image_url: string | null = null;
    try {
      if (file) {
        const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
        const { error: uploadError } = await supabase.storage
          .from("project-images")
          .upload(path, file);
        if (uploadError) throw uploadError;
        const { data: publicUrl } = supabase.storage
          .from("project-images")
          .getPublicUrl(path);
        image_url = publicUrl.publicUrl;
      }

      const { error: insertError } = await supabase
        .from("submitted_projects")
        .insert({
          title: title.trim(),
          description: description.trim() || null,
          link: link.trim() || null,
          submitter_name: submitterName.trim() || null,
          image_url,
        });

      if (insertError) throw insertError;

      setSubmitMsg("تم إرسال مشروعك بنجاح! هيظهر في المعرض بعد المراجعة.");
      setTitle("");
      setDescription("");
      setLink("");
      setSubmitterName("");
      setFile(null);
    } catch (err) {
      setSubmitMsg("حصل خطأ أثناء الإرسال، حاول تاني.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-20 w-full" id="community-projects">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="heading"
      >
        Community <span className="text-purple">Showcase</span>
      </motion.h1>
      <p className="text-center text-white-200 mt-4 max-w-2xl mx-auto">
        Built something you&apos;re proud of? Share it here — every
        submission is reviewed before it goes live.
      </p>

      <div className="flex justify-center mt-8">
        <MagicButton
          title={showForm ? "Close form" : "Submit your project"}
          icon={<FaPlus />}
          position="left"
          handleClick={() => setShowForm((s) => !s)}
        />
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="mx-auto mt-8 max-w-xl overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0b0e28] p-6 flex flex-col gap-4"
          >
            <input
              required
              placeholder="Project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-lg bg-[#10132E] px-4 py-2.5 text-sm text-white outline-none border border-white/[0.08] focus:border-purple/60"
            />
            <textarea
              placeholder="Short description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="rounded-lg bg-[#10132E] px-4 py-2.5 text-sm text-white outline-none border border-white/[0.08] focus:border-purple/60 resize-none"
            />
            <input
              type="url"
              placeholder="Live link (optional)"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="rounded-lg bg-[#10132E] px-4 py-2.5 text-sm text-white outline-none border border-white/[0.08] focus:border-purple/60"
            />
            <input
              placeholder="Your name (optional)"
              value={submitterName}
              onChange={(e) => setSubmitterName(e.target.value)}
              className="rounded-lg bg-[#10132E] px-4 py-2.5 text-sm text-white outline-none border border-white/[0.08] focus:border-purple/60"
            />
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/svg+xml,image/gif"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="text-sm text-white-200 file:mr-4 file:rounded-lg file:border-0 file:bg-[#10132E] file:px-4 file:py-2 file:text-white file:text-sm"
            />

            <div className="self-center mt-2">
              <MagicButton
                type="submit"
                disabled={submitting}
                title={submitting ? "Sending..." : "Send for review"}
                icon={submitting ? <FaSpinner className="animate-spin" /> : <FaLocationArrow />}
                position="right"
              />
            </div>

            {submitMsg && (
              <p className="text-center text-sm text-purple">{submitMsg}</p>
            )}
          </motion.form>
        )}
      </AnimatePresence>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <p className="col-span-full text-center text-white-200">Loading…</p>
        ) : projects.length === 0 ? (
          <p className="col-span-full text-center text-white-200">
            No community projects yet — be the first to submit one!
          </p>
        ) : (
          projects.map((p) => (
            <motion.a
              key={p.id}
              href={p.link ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-white/[0.1] bg-[#0b0e28] overflow-hidden flex flex-col hover:border-purple/60 transition-colors"
            >
              {p.image_url && (
                <div className="h-40 w-full overflow-hidden bg-[#10132E]">
                  <img
                    src={p.image_url}
                    alt={p.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="font-bold text-white">{p.title}</h3>
                {p.description && (
                  <p className="text-sm text-white-200 line-clamp-2">
                    {p.description}
                  </p>
                )}
                {p.submitter_name && (
                  <span className="text-xs text-white-200/70 mt-1">
                    by {p.submitter_name}
                  </span>
                )}
              </div>
            </motion.a>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="px-4 py-2 rounded-lg border border-white/[0.1] text-sm text-white disabled:opacity-30 hover:border-purple/60 transition-colors"
          >
            Prev
          </button>
          <span className="text-sm text-white-200">
            {page + 1} / {totalPages}
          </span>
          <button
            disabled={page >= totalPages - 1}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            className="px-4 py-2 rounded-lg border border-white/[0.1] text-sm text-white disabled:opacity-30 hover:border-purple/60 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CommunityProjects;
