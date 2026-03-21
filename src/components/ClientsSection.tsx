import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  {
    name: "GoMunchZ",
    industry: "E-Commerce",
    initials: "BF",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
    logo: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1772772656/Gomunchzlogo_cvt4dt.jpg", // Place logo path here e.g. "/clients/brightfuture.png"
  },
  {
    name: "Khushi Box ",
    industry: "Gift And Cloths",
    initials: "",
    color: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-400",
    logo: "https://res.cloudinary.com/dq7hun84m/image/upload/v1773765618/logo-main_jwi3jb.png",
  },
  {
    name: "RoyalStandard Pub",
    industry: "Pub",
    initials: "",
    color: "from-green-500/20 to-green-600/5",
    iconColor: "text-green-400",
    logo: "https://www.theroyalstandardpub.com/THE%20ROYAL.jpg",
  },
  {
    name: "Tejo Vikash",
    industry: "PreSchool and Tutations",
    initials: "FZ",
    color: "from-red-500/20 to-red-600/5",
    iconColor: "text-red-400",
    logo: "https://tejo-vikash.vercel.app/images/Logo1.png",
  },
  /*  {
     name: "EduSmart Institute",
     industry: "EdTech",
     initials: "ES",
     color: "from-purple-500/20 to-purple-600/5",
     iconColor: "text-purple-400",
     logo: "",
   },
   {
     name: "TrendWear Store",
     industry: "Fashion & Retail",
     initials: "TW",
     color: "from-pink-500/20 to-pink-600/5",
     iconColor: "text-pink-400",
     logo: "",
   }, */
];

const ClientsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-10 md:py-14 px-6 md:px-12 border-y border-border bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-secondary" />
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
              Our Clients
            </span>
            <div className="h-px w-12 bg-secondary" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Trusted by <span className="italic text-gradient-brand">Growing Businesses</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card rounded-2xl p-4 flex flex-col items-center text-center gap-3 cursor-default hover:-translate-y-1 hover:shadow-premium transition-all duration-300"
            >
              {/* Logo or Initials */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${client.color} border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden`}>
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain p-1"
                  />
                ) : (
                  <span className={`font-display text-lg font-bold ${client.iconColor}`}>
                    {client.initials}
                  </span>
                )}
              </div>

              {/* Name & Industry */}
              <div>
                <p className="font-display text-sm font-bold text-foreground leading-tight group-hover:text-gradient-brand transition-all duration-300">
                  {client.name}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{client.industry}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center font-body text-sm text-muted-foreground mt-8"
        >
          Over <span className="text-secondary font-semibold">60+ successful projects</span> delivered across industries.
        </motion.p>
      </div>
    </section>
  );
};

export default ClientsSection;
