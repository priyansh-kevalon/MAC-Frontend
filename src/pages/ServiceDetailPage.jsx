import { useParams, Navigate } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail.jsx";
import { getServiceBySlug } from "../data/services.js";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  return <ServiceDetail key={service.slug} service={service} />;
}