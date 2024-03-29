import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiUsers,
  FiTrendingUp,
  FiSliders,
  FiAlertCircle,
  FiDatabase,
  FiMail,
} from 'react-icons/fi';

export default function Sidebar() {
  return (
    <div className="sidebar-conteiner">
      <div className="sidebar">
        <Link to="/leads" className="sidebarItem">
          <div>
            <FiUsers size={40} style={{ fill: '#333', color: 'gainsboro' }} />
            <br />
            Leads
          </div>
        </Link>
        <Link to="/estatisticas" className="sidebarItem">
          <div>
            <FiTrendingUp
              size={40}
              style={{ fill: '#333', color: 'gainsboro' }}
            />
            <br />
            Estatísticas
          </div>
        </Link>
        <Link to="/alertas" className="sidebarItem">
          <div>
            <FiAlertCircle
              size={40}
              style={{ fill: '#333', color: 'gainsboro' }}
            />
            <br />
            Alertas
          </div>
        </Link>
        <Link to="/exportar" className="sidebarItem">
          <div>
            <FiDatabase size={40} style={{ color: 'gainsboro' }} />
            <br />
            Exportar
          </div>
        </Link>
        <Link to="/email" className="sidebarItem">
          <div>
            <FiMail size={40} style={{ fill: '#333', color: 'gainsboro' }} />
            <br />
            Email
          </div>
        </Link>
        <Link to="/configurar" className="sidebarItem">
          <div>
            <FiSliders size={40} style={{ fill: '#333', color: 'gainsboro' }} />
            <br />
            Configurar
          </div>
        </Link>
      </div>
    </div>
  );
}
