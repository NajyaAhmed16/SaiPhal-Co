import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ServiceLayout from '../layouts/ServiceLayout';
import { services } from '../data/services';

export default function ServicePage() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceLayout service={service} />;
}
