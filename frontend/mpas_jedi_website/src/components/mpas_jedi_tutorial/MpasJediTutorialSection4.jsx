import '../../style/MpasJediTutorial.css'
import {Link} from "react-router-dom";
import CodeBlock from "../Markdown";

const MpasJediTutorialSection4 = () => {
    return (
        <div className={"MpasJediTutorial"}>
            <div className={"NavButton"}>
                <div className={"PreviousButton"}>
                    <Link to={"/tutorial/section3"}>
                        <button> Generating localization files and running 3D/4DEnVar conventional obs</button>
                    </Link>
                </div>
                <div className={"NextButton"}>
                    <Link to={"/tutorial/section5"}>
                        <button>Running 3DVar and hybrid-3DEnVar with satellite radiance data</button>
                    </Link>
                </div>
            </div>
            <div className={"content"}>
                <h1>
                    Generating localization files and running 3D/4DEnVar conventional obs
                </h1>
                <h2>Running 3D Var</h2>
                <p>
                    In this practice, we will run MPAS-JEDI 3DVar at global 240 km mesh. The overall procedure is
                    similar to the 3D/4DEnVar practice. However, 3DVar uses the static multivariate background error
                    covariance (B), which contains the climatological characteristics. Here, the pre-generated static B
                    will be used. We hope to provide a practice for static B training in future MPAS-JEDI tutorials.

                    After changing to our
                    <CodeBlock
                        value={
                            "/glade/derecho/scratch/${USER}/mpas_jedi_tutorial"
                        } language={"bash"} inline={true}
                    />, create the
                    working directory for 3dvar.

                    <CodeBlock
                        value={
                            "cd /glade/derecho/scratch/$USER/mpas_jedi_tutorial\n" +
                            "mkdir 3dvar\n" +
                            "cd 3dvar"
                        } language={"bash"} inline={false}
                    />
                    Set environment variable for the mpas-bundle directory,

                    <CodeBlock
                        value={
                            "export bundle_dir=/glade/derecho/scratch/liuz/mpas_bundle_v3_public_gnuSP"
                        } language={"bash"} inline={false}
                    />
                    Link MPAS physics-related data and tables, MPAS graph, MPAS streams, and MPAS namelist files.

                    <CodeBlock
                        value={
                            "ln -fs ../MPAS_namelist_stream_physics_files/*BL ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/*DATA ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/x1.10242.graph.info.part.64 ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/streams.atmosphere_240km ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.analysis ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.background ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.control ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.ensemble ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/namelist.atmosphere_240km ./"
                        } language={"bash"} inline={false}
                    />
                    Link the background file and copy it as an analysis file.
                    The file with prefix mpasout contains the variables for "da_state" stream of 2-stream I/O.
                    And the data assimilation will overwrite several selected analyzed variables (defined in
                    stream_list.atmosphere.analysis) in the analysis file.

                    <CodeBlock
                        value={
                            "ln -fs ../background/2018041418/mpasout.2018-04-15_00.00.00.nc ./bg.2018-04-15_00.00.00.nc\n" +
                            "cp ./bg.2018-04-15_00.00.00.nc ./an.2018-04-15_00.00.00.nc"
                        } language={"bash"} inline={false}
                    />
                    Link MPAS 2-stream files.

                    <CodeBlock
                        value={
                            "ln -fs ../MPAS_namelist_stream_physics_files/x1.10242.invariant.nc .\n" +
                            "ln -fs ../background/2018041418/mpasout.2018-04-15_00.00.00.nc ./templateFields.10242.nc"
                        } language={"bash"} inline={false}
                    />
                    Prepare the pre-generated static B files.
                    <CodeBlock
                        value={
                            "ln -fs ../B_Matrix ./"
                        } language={"bash"} inline={false}
                    />
                    Next, link the observation files to be assimilated. Along the conventional observation, here a
                    single AMSU-A radiance observation from NOAA-18 is added.

                    <CodeBlock
                        value={
                            "ln -fs ../obs_ioda_pregenerated/2018041500/aircraft_obs_2018041500.h5 .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/gnssro_obs_2018041500.h5 .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/satwind_obs_2018041500.h5 .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/sfc_obs_2018041500.h5 .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/sondes_obs_2018041500.h5 .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/amsua_n18_obs_2018041500.h5"
                        } language={"bash"} inline={false}
                    />
                    For this 3DVar test, satellite radiance data from NOAA-18's AMSU-A sensor is assimilated, so need
                    coefficient files for CRTM.

                    <CodeBlock
                        value={
                            "ln -fs ../crtm_coeffs_v3 ./"
                        } language={"bash"} inline={false}
                    />
                    Link yaml files:

                    <CodeBlock
                        value={
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/namelists/geovars.yaml .\n" +
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/namelists/keptvars.yaml .\n" +
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/obsop_name_map.yaml .\n" +
                            "ln -sf ../MPAS_JEDI_yamls_scripts/3dvar.yaml ."
                        } language={"bash"} inline={false}
                    />
                    Link and submit pbs job script:

                    <CodeBlock
                        value={
                            "ln -sf ../MPAS_JEDI_yamls_scripts/run_3dvar.csh .\n" +
                            "qsub run_3dvar.csh"
                        } language={"bash"} inline={false}
                    />
                    User may check the PBS job status by running qstat -u $USER, or monitoring the log file tail -f
                    mpasjedi_3dvar.log .

                    You may make figures following similar procedures in previous sections.

                    You may also try to assimilate additional satellite radiance data.
                    To do this, additional obs file (for example,
                    ../obs_ioda_pregenerated/2018041500/amsua_n19_obs_2018041500.h5) should be linked to
                    /glade/derecho/scratch/$USER/mpas_jedi_tutorial/3dvar/.

                    Also, user need to add the corresponding obs space yaml key in 3dvar.yaml .
                </p>
                <h2>Running Hybrid-3DEnVar</h2>
                <p>
                    In this practice, we will run MPAS-JEDI Hybrid-3DEnVar at global 240 km mesh. The hybrid covariance
                    will be made from both static B and ensemble B.

                    After changing to
                    <CodeBlock
                        value={
                            "/glade/derecho/scratch/${USER}/mpas_jedi_tutorial"
                        } language={"bash"} inline={true}
                    />, create the working directory for Hybrid-3DEnVar.

                    <CodeBlock
                        value={
                            "cd /glade/derecho/scratch/$USER/mpas_jedi_tutorial\n" +
                            "mkdir hybrid-3denvar\n" +
                            "cd hybrid-3denvar"
                        } language={"bash"} inline={false}
                    />
                    Set environment variable for the mpas-bundle directory,

                    <CodeBlock
                        value={
                            "export bundle_dir=/glade/derecho/scratch/liuz/mpas_bundle_v3_public_gnuSP"
                        } language={"bash"} inline={false}
                    />
                    Link MPAS physics-related data and tables, MPAS graph, MPAS streams, and MPAS namelist files.

                    <CodeBlock
                        value={
                            "ln -fs ../MPAS_namelist_stream_physics_files/*BL ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/*DATA ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/x1.10242.graph.info.part.64 ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/streams.atmosphere_240km ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.analysis ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.background ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.control ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.ensemble ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/namelist.atmosphere_240km ./"
                        } language={"bash"} inline={false}
                    />
                    Link the background file and copy it as an analysis file.

                    <CodeBlock
                        value={
                            "ln -fs ../background/2018041418/mpasout.2018-04-15_00.00.00.nc ./bg.2018-04-15_00.00.00.nc\n" +
                            "cp ./bg.2018-04-15_00.00.00.nc ./an.2018-04-15_00.00.00.nc"
                        } language={"bash"} inline={false}
                    />
                    Link MPAS 2-stream files.

                    <CodeBlock
                        value={
                            "ln -fs ../MPAS_namelist_stream_physics_files/x1.10242.invariant.nc .\n" +
                            "ln -fs ../background/2018041418/mpasout.2018-04-15_00.00.00.nc ./templateFields.10242.nc"
                        } language={"bash"} inline={false}
                    />
                    Prepare the pre-generated static B files.

                    <CodeBlock
                        value={
                            "ln -fs ../B_Matrix ./"
                        } language={"bash"} inline={false}
                    />
                    Link the localization files.

                    <CodeBlock
                        value={
                            "ln -fs ../localization_pregenerated ./BUMP_files"
                        } language={"bash"} inline={false}
                    />
                    Link the observation files to be assimilated. Along the conventional observation, here a single
                    AMSU-A radiance observation from NOAA-18 is added.

                    <CodeBlock
                        value={
                            "ln -fs ../obs_ioda_pregenerated/2018041500/aircraft_obs_2018041500.h5 .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/gnssro_obs_2018041500.h5 .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/satwind_obs_2018041500.h5 .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/sfc_obs_2018041500.h5 .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/sondes_obs_2018041500.h5 .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/amsua_n18_obs_2018041500.h5"
                        } language={"bash"} inline={false}
                    />
                    Prepare the coefficient files for CRTM.

                    <CodeBlock
                        value={
                            "ln -fs ../crtm_coeffs_v3 ./"
                        } language={"bash"} inline={false}
                    />
                    Link yaml files.

                    <CodeBlock
                        value={
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/namelists/geovars.yaml .\n" +
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/namelists/keptvars.yaml .\n" +
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/obsop_name_map.yaml .\n" +
                            "ln -sf ../MPAS_JEDI_yamls_scripts/3dhyb.yaml ."
                        } language={"bash"} inline={false}
                    />
                    Link and submit pbs job script.

                    <CodeBlock
                        value={
                            "ln -sf ../MPAS_JEDI_yamls_scripts/run_3dhyb.csh ./\n" +
                            "qsub run_3dhyb.csh"
                        } language={"bash"} inline={false}
                    />
                    User may check the PBS job status by running qstat -u $USER, or monitoring the log file tail -f
                    mpasjedi_3dhyb.log .

                    User may want to try additional practice as below.

                    Change the hybrid weights.
                    The default 3dhyb.yaml uses 0.5 and 0.5 weights for static B and ensemble B. User can modify these
                    weights, for example, 0.2/0.8 , 0.8/0.2 , 1.0/0.0 , 0.0/1.0 , or even 2.0/1.5 .

                    <CodeBlock
                        value={
                            "hybrid background error:\n" +
                            "    covariance model: hybrid\n" +
                            "    components:\n" +
                            "    - weight:\n" +
                            "    value: 0.2\n" +
                            "        covariance:\n" +
                            "            covariance model: SABER\n" +
                            "            ...\n" +
                            "    - weight:\n" +
                            "    value: 0.8\n" +
                            "        covariance:\n" +
                            "            covariance model: ensemble\n" +
                            "            ..."
                        } language={"yaml"} inline={false}
                    />
                    You may see some changes in the fit-to-obs statistics, convergence, or analysis increment fields.
                </p>
            </div>
        </div>
    );
}

export default MpasJediTutorialSection4