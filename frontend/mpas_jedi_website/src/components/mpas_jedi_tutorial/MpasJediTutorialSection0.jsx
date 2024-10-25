import CodeBlock from "../Markdown";
import '../../style/MpasJediTutorial.css'
import {Link} from "react-router-dom";
import React from "react";

const MpasJediTutorialSection0 = () => {
    const title = "Prerequisites and environment setup\n"

    return (
        <div className={"MpasJediTutorial"}>
            <div className={"NavButton"}>
                <div className={"PreviousButton"}>
                    <Link to={'/tutorial'}>
                        <button>Introduction</button>
                    </Link>
                </div>
                <div className={"NextButton"}>
                    <Link to={'/tutorial/section1'}>
                        <button>Compiling/Testing MPAS-JEDI</button>
                    </Link>
                </div>
            </div>
            <div className={"content"}>
                <h1>{title}</h1>
                <p>
                    The practical exercises in this tutorial have been tailored to work on the Derecho system. Derecho
                    is
                    an HPC cluster that provides most of the libraries needed by MPAS-JEDI and its pre- and
                    post-processing
                    tools through modules. In general, before compiling and running MPAS-JEDI on your own system, you
                    will
                    need to install spack-stack. However, this tutorial does not cover the installation of spack-stack,
                    which was pre-installed on Derecho. MPAS-JEDI code build for this tutorial is based upon
                    <CodeBlock value={"spack-stack-1.6.0"} language={"bash"} inline={true}/>
                    Logging onto Derecho from your laptop or desktop by
                    <CodeBlock value={"ssh -X derecho.hpc.ucar.edu"} language={"bash"}/>
                    then using your password and DUO two-factor authentication to get onto Derecho. Note that '-X' is
                    necessary in order to use X11-forwarding for direct graphics display from Derecho. It is recommended
                    to
                    at least login onto Derecho with two terminals for different tasks.

                    First, copying the pre-prepared tutorial test dataset directory to your own scratch disk space:
                    <CodeBlock value={
                        "cd /glade/derecho/scratch/$USER\n" +
                        "cp -r /glade/derecho/scratch/liuz/mpasjedi_tutorial202410HOWARD ./mpas_jedi_tutorial\n" +
                        "ls -l mpas_jedi_tutorial\n" +

                        "total 372\n" +
                        "drwxr-xr-x 3 liuz ncar 16384 Aug 3 11:00 background\n" +
                        "drwxr-xr-x 3 liuz ncar 16384 Sep 23 2023 background_120km\n" +
                        "drwxr-xr-x 5 liuz ncar 16384 Aug 5 16:14 B_Matrix\n" +
                        "drwxr-xr-x 4 liuz ncar 16384 Sep 15 12:36 conus15km\n" +
                        "drwxr-xr-x 2 liuz ncar 147456 Aug 3 15:50 crtm_coeffs_v3\n" +
                        "drwxr-xr-x 3 liuz ncar 16384 Aug 3 21:23 ensemble\n" +
                        "drwxr-xr-x 2 liuz ncar 49152 Aug 5 16:32 localization_pregenerated\n" +
                        "drwxr-xr-x 2 liuz ncar 16384 Sep 15 12:44 MPAS_JEDI_yamls_scripts\n" +
                        "drwxr-xr-x 2 liuz ncar 16384 Aug 3 14:44 MPAS_namelist_stream_physics_files\n" +
                        "drwxr-xr-x 2 liuz ncar 16384 Sep 23 2023 ncl_scripts\n" +
                        "drwxr-xr-x 3 liuz ncar 16384 Sep 23 2023 obs_bufr\n" +
                        "drwxr-xr-x 3 liuz ncar 16384 Aug 6 22:19 obs_ioda_pregenerated\n" +
                        "drwxr-xr-x 5 liuz ncar 16384 Aug 7 16:25 omboma_from2experiments\n" +
                        "-rwxr-xr-x 1 liuz ncar 393 Sep 15 15:26 setup_intel.sh"
                    } language={"bash"}/>
                    This copy will take some time as the size of the whole directory is ~15GB! You may pay special
                    attention
                    to the following directories:

                    obs_ioda_pregenerated - Pre-converted ioda obs, used in practices.
                    localization_pregenerated - Pre-generated BUMP localization files used in practices.
                    On derecho, the default shell is bash.

                    Derecho uses the LMOD package to manage the software development. Running module list to see what
                    modules are loaded by default right after you log in. It should print something similar to below:
                    <CodeBlock value={
                        "module list"
                    } language={"bash"}/>
                    Post-processing and graphics exercises will need Python and NCAR Command Language (NCL). On Derecho,
                    these are available in a Conda environment named 'npl'. The npl environment also provides NCL. We
                    can
                    load the conda module and activate the npl environment with the following commands:
                    <CodeBlock value={
                        "module reset\n" +
                        "module load conda\n" +
                        "conda activate npl\n" +
                        "which ncl # check whether ncl exists"
                    } language={"bash"}/>
                    You will run all of the practical exercises in your own scratch space under
                    /glade/derecho/scratch/$USER/mpas_jedi_tutorial.

                    Running jobs on Derecho requires the submission of a job script to a batch queueing system, which
                    will
                    allocate requested computing resources to your job when they become available. In general, it's best
                    to
                    avoid running any compute-intensive jobs on the login nodes, and the practical instructions to
                    follow
                    will guide you in the process of submitting jobs when necessary.

                    As a first introduction to running jobs on Derecho, there are several key commands worth noting:
                    <ul>
                        <li><CodeBlock
                            value={"qsub job-script"}
                            language={'bash'}
                            inline={true}
                        />
                            <text>: This command submits a PBS job script, which describes a job to be run on one or
                                more
                                batch nodes.
                            </text>
                        </li>
                        <li>
                            <CodeBlock value={"qstat -u $USER"} language={'bash'} inline={true}/>: This command tells
                            you
                            the status of your pending and running jobs. Note that you may
                            need to wait about 30 seconds for a recently submitted job to show up.
                        </li>
                        <li>
                            <CodeBlock value={"qdel JobID"} language={'bash'} inline={true}/>: This command deletes a
                            queued
                        </li>
                    </ul>
                    Throughout this tutorial, you will submit your jobs to a special queue S6244386 with the 'premium'
                    priority, using an account number UMMM0008. The special queue S6244386 can be used between 11:30am
                    and
                    5:30pm each day. Out of this time slot, you can use the main queue by modifying the queue name in
                    the
                    job scripts. At various points in the practical exercises, we'll need to submit jobs to Derecho's
                    queueing system using the qsub command, and after doing so, we may check on the status of the job
                    with
                    the qstat command, monitoring the log files produced by the job once we see that the job has begun
                    to
                    run. Most exercises will run with 64 cores of one single node though each of Derecho's nodes have
                    128
                    cores (235GB available memory). Note that 4DEnVar uses 3 nodes with the analyses at 3 times.

                    You're now ready to begin with the practical exercises of this tutorial!
                </p>
            </div>
        </div>
    );
}

export default MpasJediTutorialSection0;